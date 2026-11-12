<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# strsv

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Solve one of the systems of equations `A*x = b` or `A^T*x = b` for a triangular matrix `A`.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-base-ndarray-strsv
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var strsv = require( '@stdlib/blas-base-ndarray-strsv' );
```

#### strsv( arrays )

Solves one of the systems of equations `A*x = b` or `A^T*x = b`, where `b` and `x` are one-dimensional ndarrays and `A` is an `N` by `N` unit, or non-unit, upper or lower triangular matrix.

<!-- eslint-disable max-len -->

```javascript
var Float32Matrix = require( '@stdlib/ndarray-matrix-float32' );
var Float32Vector = require( '@stdlib/ndarray-vector-float32' );
var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
var resolveTriangle = require( '@stdlib/blas-base-matrix-triangle-resolve-enum' );
var resolveTranspose = require( '@stdlib/blas-base-transpose-operation-resolve-enum' );
var resolveDiagonal = require( '@stdlib/blas-base-diagonal-type-resolve-enum' );

var A = new Float32Matrix( [ [ 1.0, 2.0, 3.0 ], [ 0.0, 4.0, 5.0 ], [ 0.0, 0.0, 6.0 ] ] );
var x = new Float32Vector( [ 1.0, 2.0, 3.0 ] );

var uplo = scalar2ndarray( resolveTriangle( 'upper' ), {
    'dtype': 'int32'
});
var trans = scalar2ndarray( resolveTranspose( 'no-transpose' ), {
    'dtype': 'int32'
});
var diag = scalar2ndarray( resolveDiagonal( 'non-unit' ), {
    'dtype': 'int32'
});

var out = strsv( [ A, x, uplo, trans, diag ] );
// x => <ndarray>[ -0.25, -0.125, 0.5 ]

var bool = ( out === x );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a two-dimensional input ndarray corresponding to `A`.
    -   a one-dimensional input/output ndarray corresponding to `x`.
    -   a zero-dimensional ndarray specifying whether the upper or lower triangular part of `A` should be referenced.
    -   a zero-dimensional ndarray specifying whether `A` should be transposed, conjugate-transposed, or not transposed.
    -   a zero-dimensional ndarray specifying whether `A` has a unit or non-unit diagonal.

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-discrete-uniform' );
var zeros = require( '@stdlib/ndarray-zeros' );
var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
var resolveTriangle = require( '@stdlib/blas-base-matrix-triangle-resolve-enum' );
var resolveTranspose = require( '@stdlib/blas-base-transpose-operation-resolve-enum' );
var resolveDiagonal = require( '@stdlib/blas-base-diagonal-type-resolve-enum' );
var striu = require( '@stdlib/blas-ext-base-ndarray-striu' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );
var strsv = require( '@stdlib/blas-base-ndarray-strsv' );

var opts = {
    'dtype': 'float32'
};
var eopts = {
    'dtype': 'int32'
};

var M = discreteUniform( [ 3, 3 ], 1, 10, opts );
var A = zeros( [ 3, 3 ], opts );
var x = discreteUniform( [ 3 ], 0, 10, opts );

var uplo = scalar2ndarray( resolveTriangle( 'upper' ), eopts );
var trans = scalar2ndarray( resolveTranspose( 'no-transpose' ), eopts );
var diag = scalar2ndarray( resolveDiagonal( 'non-unit' ), eopts );

var k = scalar2ndarray( 0, {
    'dtype': 'generic'
});
striu( [ M, A, k ] );

var out = strsv( [ A, x, uplo, trans, diag ] );
console.log( ndarray2array( out ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-ndarray-strsv.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-ndarray-strsv

[test-image]: https://github.com/stdlib-js/blas-base-ndarray-strsv/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-ndarray-strsv/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-ndarray-strsv/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-ndarray-strsv?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-ndarray-strsv.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-ndarray-strsv/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-ndarray-strsv/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-ndarray-strsv/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-ndarray-strsv/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-ndarray-strsv/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-ndarray-strsv/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-ndarray-strsv/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-ndarray-strsv/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-ndarray-strsv/main/LICENSE

</section>

<!-- /.links -->
