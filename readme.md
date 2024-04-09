# Fix CORS Errors (React, Angular, Vue)

Easily bypass CORS errors in development environments with the `fix-cors-errors` package. This Node module provides a straightforward way to modify URLs to utilize a HTTP Proxy, facilitating the development and testing of web applications that consume third-party APIs without CORS support.

### Features

- **Simple Integration**: Easily integrate with any JavaScript or TypeScript project.
- **Development Efficiency**: Speed up development and testing phases by circumventing CORS errors.
- **Flexibility**: Use with popular frameworks like Angular, React, and more.

### Installation

Install `fix-cors-errors` using npm by running the following command:

```bash
npm install fix-cors-errors
```

### Basic Usage

First, import the `fixCorsErrors` function in your JavaScript or TypeScript file and wrap it around the URL:

```ts
import { fixCorsErrors } from 'fix-cors-errors';

// Using fetch to request data
fetch(fixCorsErrors('https://dummyjson.com/products/1'))
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

#### React Example
```ts
import React, { useEffect, useState } from 'react';
import { fixCorsErrors } from 'fix-cors-errors';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fixedUrl = fixCorsErrors('https://dummyjson.com/products/1');
    fetch(fixedUrl)
      .then(response => response.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <div>Loading...</div>;
  return <div>{JSON.stringify(data)}</div>;
};

export default DataFetcher;
```

#### Angular Example
```ts
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { fixCorsErrors } from 'fix-cors-errors';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="data; else loading">
      {{ data | json }}
    </div>
    <ng-template #loading>
      Loading...
    </ng-template>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public data: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(fixCorsErrors('https://dummyjson.com/products/1'))
      .subscribe(
        result => this.data = result,
        error => console.error('Error:', error)
      );
  }
}

```

### Contributing
Contributions to fixCorsErrors are welcome! Please refer to the contributing guidelines for more details on how to submit pull requests, report issues, or request features.

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Support
If you encounter any issues or require assistance, please open an issue on https://corsproxy.io/support/