import { Component, OnInit } from '@angular/core';
import { Laptopservice } from '../laptopservice/laptopservice';

@Component({
  selector: 'app-laptopcomponent',
  standalone: false,
  templateUrl: './laptopcomponent.html',
  styleUrl: './laptopcomponent.css',
})
export class Laptopcomponent implements OnInit {
  laptops: any[] = [];
  
  // Form fields for adding new laptop
  newLaptop = {
    name: '',
    brand: '',
    price: 0,
    ram: ''
  };

  updateIndex: number = 0;
  updateLaptop = {
    name: '',
    brand: '',
    price: 0,
    ram: ''
  };

  // Search by brand
  searchBrand: string = '';
  searchResult: any[] = [];

  // Delete index
  deleteIndex: number = 0;

  // Find by index
  findIndex: number = 0;
  foundLaptop: any = null;

  constructor(private laptopService: Laptopservice) {}

  ngOnInit() {
    this.getAllLaptops();
  }

  getAllLaptops() {
    this.laptopService.getLaptops().subscribe(
      (data) => {
        this.laptops = data;
      },
      (error) => {
        console.error('Error fetching laptops:', error);
      }
    );
  }

  // Add a new laptop
  addLaptop() {
    this.laptopService.addLaptop(this.newLaptop).subscribe(
      () => {
        console.log('Laptop added successfully');
        this.getAllLaptops();
        // Reset form
        this.newLaptop = { name: '', brand: '', price: 0, ram: '' };
      },
      (error) => {
        console.error('Error adding laptop:', error);
      }
    );
  }

  // Delete a laptop by index
  deleteLaptop() {
    this.laptopService.deleteLaptop(this.deleteIndex).subscribe(
      () => {
        console.log('Laptop deleted successfully');
        this.getAllLaptops();
      },
      (error) => {
        console.error('Error deleting laptop:', error);
      }
    );
  }

  // Update a laptop by index
  updateLaptopByIndex() {
    this.laptopService.updateLaptop(this.updateIndex, this.updateLaptop).subscribe(
      () => {
        console.log('Laptop updated successfully');
        this.getAllLaptops();
        // Reset form
        this.updateLaptop = { name: '', brand: '', price: 0, ram: '' };
      },
      (error) => {
        console.error('Error updating laptop:', error);
      }
    );
  }

  // Find laptop by index
  findByIndex() {
    this.laptopService.findById(this.findIndex).subscribe(
      (data) => {
        this.foundLaptop = data;
      },
      (error) => {
        console.error('Error finding laptop:', error);
        this.foundLaptop = null;
      }
    );
  }

  // Find laptops by brand
  findByBrand() {
    if (this.searchBrand.trim()) {
      this.laptopService.findByBrand(this.searchBrand).subscribe(
        (data) => {
          this.searchResult = data;
        },
        (error) => {
          console.error('Error searching by brand:', error);
        }
      );
    }
  }

  // Clear search results
  clearSearch() {
    this.searchResult = [];
    this.searchBrand = '';
  }
}
