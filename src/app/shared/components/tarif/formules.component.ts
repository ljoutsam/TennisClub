import { Component, Input, OnInit } from '@angular/core';
import { Formule } from '../../../models/formules.model';
import { FormulesService } from './formules.service';

@Component({
  selector: 'app-formules',
  templateUrl: './formules.component.html',
  styleUrl: './formules.component.scss'
})
export class FormulesComponent implements OnInit {
  @Input() formules: Formule[] = [];

  filteredFormules: Formule[] = [];

  constructor(private formuleService: FormulesService) {}

  ngOnInit(): void {
    this.formuleService.getFormules().subscribe((formules) => {
      this.formules = formules;
      this.filteredFormules = formules;
    });
  }

  onFilteredFormules(filteredFormules: Formule[]): void {
    this.filteredFormules = filteredFormules;
  }
}
