import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Formule } from '../../../models/formules.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() formules: Formule[] = [];
  @Output() filteredFormules = new EventEmitter<Formule[]>(); 
  searchTerm: string = '';

  currentUrl='';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentUrl = this.route.snapshot.url.join('/');
  }

  handleInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    const filtered = this.formules.filter(formule => 
      formule.description.toLowerCase().includes(value.toLowerCase())
    );
    this.filteredFormules.emit(filtered); // Émettre les formules filtrées
  }

}
