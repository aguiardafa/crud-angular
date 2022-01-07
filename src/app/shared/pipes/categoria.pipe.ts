import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria',
})
export class CategoriaPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Front-end':
        return 'code';
      case 'Back-end':
        return 'terminal';
      case 'Data Science':
        return 'analytics';
      case 'Mobile':
        return 'developer_mode';
      case 'Agile':
        return 'view_kanban';
      case 'Game':
        return 'sports_esports';
      case 'DEVOPS':
        return 'settings_applications';
      case 'UX-Design':
        return 'visibility';
      case 'Security':
        return 'security';
    }
    return 'computer';
  }
}
