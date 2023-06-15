import { Component, OnInit } from '@angular/core';
import { ElectronicItemsService } from 'src/app/services/electronic-items.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit{
  
  constructor(private item: ElectronicItemsService, private router: ActivatedRoute){}

  editItem = new FormGroup({
    name: new FormControl( '' ),
    price: new FormControl ( '' ),
    quantity: new FormControl ( '' )
  }); 

  message: boolean = false;

  ngOnInit(): void {
    // console.log(this.router.snapshot.params['id']);   FOR TESTING
    this.item.getItemById(this.router.snapshot.params['id']).subscribe((result:any)=>{
      console.log(result);
      this.editItem = new FormGroup({
        name: new FormControl( result['name'] ),
        price: new FormControl ( result['price'] ),
        quantity: new FormControl ( result['quantity'] )
      }); 
    });
  }

  updateData(){
    // console.log(this.editItem.value);
    this.item.updateItemData(this.router.snapshot.params['id'],this.editItem.value).subscribe((result)=>{
      // console.log(result);
      this.message=true;
    });
  }

  removeMessage(){
    this.message = false;
  }

}
