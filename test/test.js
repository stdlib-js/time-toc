/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var isIntegerArray = require( '@stdlib/assert-is-integer-array' );
var tic = require( '@stdlib/time-tic' );
var toc = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof toc, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function takes a single argument', function test( t ) {
	t.strictEqual( toc.length, 1, 'number of parameters is equal to one' );
	t.end();
});

tape( 'the function throws an error if not provided an array of nonnegative integers', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		void 0,
		[],
		[ 3.14, null ],
		[ 1, 3.14 ],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			toc( value );
		};
	}
});

tape( 'the function throws an error if not provided an array of length `2`', function test( t ) {
	var values;
	var i;

	values = [
		[ 1 ],
		[ 1, 2, 3 ],
		[ 1, 2, 3, 4 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws a range error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			toc( value );
		};
	}
});

tape( 'the function returns an integer array', function test( t ) {
	var start = tic();
	t.strictEqual( isIntegerArray( toc( start ) ), true, 'returns an integer integer array' );
	t.end();
});

tape( 'the function returns a high-resolution time difference', function test( t ) {
	var expected;
	var start;
	var delta;
	var now;
	var toc;

	toc = proxyquire( './../lib/main.js', {
		'@stdlib/time-tic': mock
	});

	// Zero delta:
	start = [ 0, 0 ];
	now = [ 0, 0 ];
	expected = [ 0, 0 ];

	delta = toc( start );
	t.deepEqual( delta, expected, 'returns expected delta' );

	// Zero delta:
	start = [ 100, 100 ];
	now = [ 100, 100 ];
	expected = [ 0, 0 ];

	delta = toc( start );
	t.deepEqual( delta, expected, 'returns expected delta' );

	// Zero and positive delta:
	start = [ 0, 0 ];
	now = [ 0, 999999999 ];
	expected = [ 0, 999999999 ];

	delta = toc( start );
	t.deepEqual( delta, expected, 'returns expected delta' );

	// Positive and zero delta:
	start = [ 99, 0 ];
	now = [ 100, 0 ];
	expected = [ 1, 0 ];

	delta = toc( start );
	t.deepEqual( delta, expected, 'returns expected delta' );

	// Both positive delta:
	start = [ 0, 0 ];
	now = [ 100, 900 ];
	expected = [ 100, 900 ];

	delta = toc( start );
	t.deepEqual( delta, expected, 'returns expected delta' );

	// Positive and negative delta:
	start = [ 0, 999999999 ];
	now = [ 100, 0 ];
	expected = [ 99, 1 ];

	delta = toc( start );
	t.deepEqual( delta, expected, 'returns expected delta' );

	// Zero and negative delta:
	start = [ 0, 999999999 ];
	now = [ 0, 0 ];
	expected = [ 0, -999999999 ];

	delta = toc( start );
	t.deepEqual( delta, expected, 'returns expected delta' );

	// Both negative delta:
	start = [ 100, 999999999 ];
	now = [ 99, 0 ];
	expected = [ -1, -999999999 ];

	delta = toc( start );
	t.deepEqual( delta, expected, 'returns expected delta' );

	// Negative and zero delta:
	start = [ 100, 0 ];
	now = [ 99, 0 ];
	expected = [ -1, 0 ];

	delta = toc( start );
	t.deepEqual( delta, expected, 'returns expected delta' );

	// Negative and positive delta:
	start = [ 100, 0 ];
	now = [ 99, 999999999 ];
	expected = [ 0, -1 ];

	delta = toc( start );
	t.deepEqual( delta, expected, 'returns expected delta' );

	// Negative and positive delta:
	start = [ 1, 0 ];
	now = [ 0, 999999999 ];
	expected = [ 0, -1 ];

	delta = toc( start );
	t.deepEqual( delta, expected, 'returns expected delta' );

	t.end();

	function mock() {
		return now;
	}
});
