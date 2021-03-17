(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{365:function(e,t,a){e.exports=a.p+"assets/img/laravel-tools.46874dbf.png"},366:function(e,t,a){e.exports=a.p+"assets/img/laravel-naming-conventions-1.65bd0f70.png"},367:function(e,t,a){e.exports=a.p+"assets/img/laravel-naming-conventions-2.4c818bd9.png"},382:function(e,t,a){"use strict";a.r(t);var r=a(45),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"laravel-review-guide"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#laravel-review-guide"}},[e._v("#")]),e._v(" Laravel Review Guide")]),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#coding-style"}},[e._v("Coding Style")])]),r("li",[r("a",{attrs:{href:"#design-patterns"}},[e._v("Design Patterns")])]),r("li",[r("a",{attrs:{href:"#single-responsibility-principle"}},[e._v("Single responsibility principle")])]),r("li",[r("a",{attrs:{href:"#fat-models-skinny-controllers"}},[e._v("Fat models, skinny controllers")])]),r("li",[r("a",{attrs:{href:"#validation"}},[e._v("Validation")])]),r("li",[r("a",{attrs:{href:"#business-logic-should-be-in-service-class"}},[e._v("Business logic should be in service class")])]),r("li",[r("a",{attrs:{href:"#don-t-repeat-yourself-dry"}},[e._v("Don't repeat yourself (DRY)")])]),r("li",[r("a",{attrs:{href:"#do-not-execute-queries-in-blade-templates-and-use-eager-loading"}},[e._v("Do not execute queries in Blade templates and use eager loading")])]),r("li",[r("a",{attrs:{href:"#use-standard-laravel-tools-accepted-by-community"}},[e._v("Use standard Laravel tools accepted by community")])]),r("li",[r("a",{attrs:{href:"#follow-laravel-naming-conventions"}},[e._v("Follow Laravel naming conventions")])]),r("li",[r("a",{attrs:{href:"#prefer-to-use-eloquent-over-using-query-builder-and-raw-sql-queries-prefer-collections-over-arrays"}},[e._v("Prefer to use Eloquent over using Query Builder and raw SQL queries. Prefer collections over arrays")])]),r("li",[r("a",{attrs:{href:"#do-not-get-data-from-the-env-file-directly"}},[e._v("Do not get data from the .env file directly")])]),r("li",[r("a",{attrs:{href:"#store-dates-in-the-standard-format"}},[e._v("Store dates in the standard format.")])]),r("li",[r("a",{attrs:{href:"#working-with-utf-8"}},[e._v("Working with UTF-8")])]),r("li",[r("a",{attrs:{href:"#table-and-field-naming"}},[e._v("Table and field naming")])]),r("li",[r("a",{attrs:{href:"#changing-tables-index-or-inserting-sample-data"}},[e._v("Changing tables, index or inserting sample data.")])]),r("li",[r("a",{attrs:{href:"#date-and-time"}},[e._v("Date and Time")])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"coding-style"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#coding-style"}},[e._v("#")]),e._v(" Coding Style")]),e._v(" "),r("p",[e._v("Laravel follows the PSR-2 coding standard and the PSR-4 autoloading standard.")]),e._v(" "),r("h2",{attrs:{id:"design-patterns"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#design-patterns"}},[e._v("#")]),e._v(" Design Patterns")]),e._v(" "),r("p",[e._v("It is easy to mess up your Laravel application if you don’t have any sort of pattern to follow. The following design patterns are recommended for those who are building an application with Laravel or want to refactor their existing projects:")]),e._v(" "),r("ul",[r("li",[e._v("Domain Driven Design")]),e._v(" "),r("li",[e._v("Don’t call Eloquent models directly, Use Repositories (if the project architecture is set up that way)")]),e._v(" "),r("li",[e._v("Inversion Of Control Container and Dependency Injection")]),e._v(" "),r("li",[e._v("SOLID Principle")])]),e._v(" "),r("h2",{attrs:{id:"single-responsibility-principle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#single-responsibility-principle"}},[e._v("#")]),e._v(" Single responsibility principle")]),e._v(" "),r("p",[e._v("A class and a method should have only one responsibility.")]),e._v(" "),r("h2",{attrs:{id:"fat-models-skinny-controllers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fat-models-skinny-controllers"}},[e._v("#")]),e._v(" Fat models, skinny controllers")]),e._v(" "),r("p",[e._v("Put all DB related logic into services or into model/repository classes if you're using Query Builder or raw SQL queries.")]),e._v(" "),r("h2",{attrs:{id:"validation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[e._v("#")]),e._v(" Validation")]),e._v(" "),r("p",[e._v("Move validation from controllers to Request or Validator classes.")]),e._v(" "),r("h2",{attrs:{id:"business-logic-should-be-in-service-class"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#business-logic-should-be-in-service-class"}},[e._v("#")]),e._v(" Business logic should be in service class")]),e._v(" "),r("p",[e._v("A controller must have only one responsibility, so move business logic from controllers to service classes.")]),e._v(" "),r("h2",{attrs:{id:"don-t-repeat-yourself-dry"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#don-t-repeat-yourself-dry"}},[e._v("#")]),e._v(" Don't repeat yourself (DRY)")]),e._v(" "),r("p",[e._v("Reuse code when you can. SRP is helping you to avoid duplication. Also, reuse Blade templates, use Eloquent scopes etc.")]),e._v(" "),r("h2",{attrs:{id:"do-not-execute-queries-in-blade-templates-and-use-eager-loading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#do-not-execute-queries-in-blade-templates-and-use-eager-loading"}},[e._v("#")]),e._v(" Do not execute queries in Blade templates and use eager loading")]),e._v(" "),r("p",[e._v("(N + 1 problem)")]),e._v(" "),r("h2",{attrs:{id:"use-standard-laravel-tools-accepted-by-community"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use-standard-laravel-tools-accepted-by-community"}},[e._v("#")]),e._v(" Use standard Laravel tools accepted by community")]),e._v(" "),r("p",[e._v("Prefer to use built-in Laravel functionality and community packages instead of using 3rd party packages and tools. Any developer who will work with your app in the future will need to learn new tools. Also, chances to get help from the Laravel community are significantly lower when you're using a 3rd party package or tool. Do not make your client pay for that.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(365),alt:"An image"}})]),e._v(" "),r("h2",{attrs:{id:"follow-laravel-naming-conventions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#follow-laravel-naming-conventions"}},[e._v("#")]),e._v(" Follow Laravel naming conventions")]),e._v(" "),r("p",[r("img",{attrs:{src:a(366),alt:"An image"}}),e._v(" "),r("img",{attrs:{src:a(367),alt:"An image"}})]),e._v(" "),r("h2",{attrs:{id:"prefer-to-use-eloquent-over-using-query-builder-and-raw-sql-queries-prefer-collections-over-arrays"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prefer-to-use-eloquent-over-using-query-builder-and-raw-sql-queries-prefer-collections-over-arrays"}},[e._v("#")]),e._v(" Prefer to use Eloquent over using Query Builder and raw SQL queries. Prefer collections over arrays")]),e._v(" "),r("p",[e._v("Eloquent allows you to write readable and maintainable code. Also, Eloquent has great built-in tools like soft deletes, events, scopes etc.")]),e._v(" "),r("h2",{attrs:{id:"do-not-get-data-from-the-env-file-directly"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#do-not-get-data-from-the-env-file-directly"}},[e._v("#")]),e._v(" Do not get data from the .env file directly")]),e._v(" "),r("p",[e._v("Pass the data to config files instead and then use the config() helper function to use the data in an application.")]),e._v(" "),r("h2",{attrs:{id:"store-dates-in-the-standard-format"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#store-dates-in-the-standard-format"}},[e._v("#")]),e._v(" Store dates in the standard format.")]),e._v(" "),r("p",[e._v("Use accessors and mutators to modify date format")]),e._v(" "),r("h2",{attrs:{id:"working-with-utf-8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#working-with-utf-8"}},[e._v("#")]),e._v(" Working with UTF-8")]),e._v(" "),r("p",[e._v("Laravel uses the "),r("strong",[e._v("patchwork/utf8")]),e._v(" for most of its UT8-related stuff. It is required that all developers understands the following concepts:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://www.phpwact.org/php/i18n/charsets",target:"_blank",rel:"noopener noreferrer"}},[e._v("Character Sets / Character Encoding Issues"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.phpwact.org/php/i18n/utf-8",target:"_blank",rel:"noopener noreferrer"}},[e._v("Handling UTF-8 with PHP"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://en.wikipedia.org/wiki/Unicode_equivalence",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unicode Normalization"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://unicode.org/reports/tr29/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grapheme Clusters"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.unicode.org/reports/tr36/#Deletion_of_Noncharacters",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unicode Security Considerations"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"table-and-field-naming"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table-and-field-naming"}},[e._v("#")]),e._v(" Table and field naming")]),e._v(" "),r("p",[e._v("Table and field names MUST be lowercase and use snake_case.")]),e._v(" "),r("p",[e._v("Table names should use the plural form of the actual real life object it is storing. Like for example, the table name for blog posts should be posts not post.")]),e._v(" "),r("p",[e._v("Primary keys should be named “id” in the table names. While the foreign key it represents in other table should be on singularform_id. (e.g. table: post, primary key: id, foreign key: post_id )")]),e._v(" "),r("h2",{attrs:{id:"changing-tables-index-or-inserting-sample-data"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#changing-tables-index-or-inserting-sample-data"}},[e._v("#")]),e._v(" Changing tables, index or inserting sample data.")]),e._v(" "),r("p",[e._v("DON’T create tables or index directly via PHPMyAdmin or console. Use database migration to create table, add/alter any fields, and commit those to Git repository.")]),e._v(" "),r("p",[e._v("DON’T directly pass the database export (sql files) to your colleagues in order to share your database changes. Let them run the migration files you committed to the repository.")]),e._v(" "),r("p",[e._v("DON’T insert fake values directly into the database for testing purposes. Create Seeder files to populate your database.")]),e._v(" "),r("h2",{attrs:{id:"date-and-time"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#date-and-time"}},[e._v("#")]),e._v(" Date and Time")]),e._v(" "),r("p",[e._v("Although PHP has a class named DateTime to help you when reading, writing, comparing or calculating with date and time. It is recommended that you use the Carbon library for dealing with dates.")])])}),[],!1,null,null,null);t.default=s.exports}}]);