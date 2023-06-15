import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ElectronicItemsService } from 'src/app/services/electronic-items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private item: ElectronicItemsService){}

  addItem = new FormGroup({
    name: new FormControl( '' ),
    price: new FormControl ( '' ),
    quantity: new FormControl ( '' )
  });

  message: boolean = false;

  saveData(){
    // console.log(this.addItem.value);
    this.item.saveItemData(this.addItem.value).subscribe((result) =>{
      // console.log(result)
      this.message = true;
      this.addItem.reset();
    });
  }

  removeMessage(){
    this.message = false;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
