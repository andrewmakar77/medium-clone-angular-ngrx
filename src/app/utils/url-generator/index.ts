import { environment } from 'src/environments/environment';

export class ApiUrlGenerator {
  static generate(url: string): string {
    return `${environment.apiUrl}${url}`;
  }
}
