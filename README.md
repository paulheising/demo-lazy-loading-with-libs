This projects demonstrates the following issue on github: https://github.com/angular/angular/issues/45304

Use `ng build foo-lib && ng build` to build the lib and app.

If you build the initial state of this project, you'll see components from
foo-lib being referenced in the main bundle, although only `AlphaComponent` is
used in the main module, `BetaComponent` is only used in the lazy module, but
still you can find code for both `lib-alpha` and `lib-beta` selectors in the
compiled `main.*.js` bundle, and none in the lazy bundle.

If you remove the references to the `foo-lib`, located in `app.module.ts` and
`app.component.html`, you are going to see that the `lib-beta` selector is not
present any more in the `main.*.js` bundle, but moved to the lazy bundle, as
expected by the author of the issue.
