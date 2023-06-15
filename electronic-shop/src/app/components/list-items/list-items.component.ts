import { Component, OnInit } from '@angular/core';
import { ElectronicItemsService } from 'src/app/services/electronic-items.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  constructor(private items: ElectronicItemsService){}

  itemData:  any=[];   

  p: any = 1;
  count: any = 5;

  ngOnInit(): void {
    this.items.getAllItems().subscribe((allItems) => {
      // console.log(allItems);  FOR TESTING
      this.itemData = allItems;     // Get the list of all items
    })
  }

  deleteItem(item_id:any){
    // console.log(item_id);  FOR TESTING
    this.items.deleteItem(item_id).subscribe((result)=>{      // Delete this item
      // console.log(result); FOR TESTING
      this.ngOnInit();    // Refresh page automatically after the delete operation
    }); 
  }
}


