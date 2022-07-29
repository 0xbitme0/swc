//!
//!  x Rest element must be final element
//!   ,----
//! 1 | var [...a, x] = [1, 2, 3];  // Error, rest must be last element
//!   :      ^^^^
//!   `----
//!
//!  x Rest element must be final element
//!   ,----
//! 2 | [...a, x] = [1, 2, 3];      // Error, rest must be last element
//!   :  ^^^^
//!   `----
//!
//!
//!Caused by:
//!    0: failed to process input file
//!    1: error was recoverable, but proceeding would result in wrong codegen
//!    2: Syntax Error
