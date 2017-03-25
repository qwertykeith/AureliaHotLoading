import { autoinject } from 'aurelia-framework';
import { RouterConfiguration, Router } from 'aurelia-router';


@autoinject
export class App {
  message = 'Hello World!';

  public router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;

    config.title = 'Droid Worx';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: './resources/elements/aaa/fred', title: 'aaaa', nav: true },
      { route: 'ssss', name: 'ssss', moduleId: './resources/elements/bbb/zzz', title: 'bbbb', nav: true },
    ]);
    config.mapUnknownRoutes('views/home/index');
  }

}
