(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-oauth2-oidc */
      "LgUO");
      /* harmony import */


      var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @abp/ng.core */
      "HmNo");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HomeComponent_a_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_a_15_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r19.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "abpLocalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "AbpAccount::Login"), "");
        }
      }

      function HomeComponent_ng_container_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0);
        }
      }

      function HomeComponent_ng_container_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0);
        }
      }

      function HomeComponent_ng_container_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0);
        }
      }

      function HomeComponent_ng_container_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0);
        }
      }

      function HomeComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "iframe", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "iframe", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "iframe", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function HomeComponent_ng_container_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0);
        }
      }

      function HomeComponent_ng_container_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0);
        }
      }

      function HomeComponent_ng_container_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0);
        }
      }

      function HomeComponent_ng_container_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0);
        }
      }

      function HomeComponent_ng_container_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0);
        }
      }

      function HomeComponent_ng_container_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0);
        }
      }

      function HomeComponent_ng_container_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0);
        }
      }

      function HomeComponent_ng_container_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0);
        }
      }

      function HomeComponent_ng_template_65_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0, 40);
        }

        if (rf & 2) {
          var context_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", context_r21.customTemplate);
        }
      }

      function HomeComponent_ng_template_65_a_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var link_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("href", link_r25.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", link_r25.label, " ");
        }
      }

      function HomeComponent_ng_template_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, HomeComponent_ng_template_65_ng_container_6_Template, 1, 1, "ng-container", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, HomeComponent_ng_template_65_a_7_Template, 3, 2, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var context_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", context_r21.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", context_r21.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", context_r21.customTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", context_r21.links);
        }
      }

      function HomeComponent_ng_template_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var context_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", context_r26.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("href", context_r26.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      var _c0 = function _c0() {
        return {
          href: "https://docs.abp.io/en/abp/latest?ref=tmpl",
          label: "See Documents"
        };
      };

      var _c1 = function _c1(a0) {
        return [a0];
      };

      var _c2 = "Explore the compherensive documentation to learn how to build a modern web application.";

      var _c3 = function _c3(a2) {
        return {
          title: "Learn the ABP Framework",
          description: _c2,
          links: a2
        };
      };

      var _c4 = function _c4(a0) {
        return {
          $implicit: a0
        };
      };

      var _c5 = "https://docs.abp.io/en/abp/latest/Samples/Index?ref=tmpl";

      var _c6 = function _c6() {
        return {
          href: _c5,
          label: "All samples"
        };
      };

      var _c7 = "See the example projects built with the ABP Framework.";

      var _c8 = function _c8(a2) {
        return {
          title: "Samples",
          description: _c7,
          links: a2
        };
      };

      var _c9 = function _c9() {
        return {
          href: "https://community.abp.io/",
          label: "Community"
        };
      };

      var _c10 = "https://docs.abp.io/en/abp/latest/Contribution/Index?ref=tmpl";

      var _c11 = function _c11() {
        return {
          href: _c10,
          label: "Contribute"
        };
      };

      var _c12 = function _c12(a0, a1) {
        return [a0, a1];
      };

      var _c13 = "Get involved with a vibrant community and become a contributor.";

      var _c14 = function _c14(a2) {
        return {
          title: "ABP Community",
          description: _c13,
          links: a2
        };
      };

      var _c15 = function _c15() {
        return {
          href: "https://blog.abp.io/abp?ref=tmpl",
          label: "See Blog"
        };
      };

      var _c16 = function _c16(a2) {
        return {
          title: "ABP Blog",
          description: "Take a look at our recently published articles.",
          links: a2
        };
      };

      var _c17 = "https://github.com/abpframework/abp/issues/new?template=feature.md";

      var _c18 = function _c18() {
        return {
          href: _c17,
          label: "Request a feature"
        };
      };

      var _c19 = "Do you love the ABP Framework? Please <strong>give a star</strong> to support it!";

      var _c20 = function _c20(a2, a3) {
        return {
          title: "Github",
          description: _c19,
          links: a2,
          customTemplate: a3
        };
      };

      var _c21 = function _c21() {
        return {
          href: "https://stackoverflow.com/questions/tagged/abp",
          label: "Questions"
        };
      };

      var _c22 = function _c22() {
        return {
          href: "https://stackoverflow.com/questions/ask",
          label: "Ask a Question"
        };
      };

      var _c23 = "See answers to previously asked questions or ask a new one.";

      var _c24 = function _c24(a2) {
        return {
          title: "Stackoverflow",
          description: _c23,
          links: a2
        };
      };

      var _c25 = "https://commercial.abp.io/startup-templates?ref=tmpl";

      var _c26 = function _c26() {
        return {
          title: "Startup Templates",
          href: _c25
        };
      };

      var _c27 = function _c27() {
        return {
          title: "Application Modules",
          href: "https://commercial.abp.io/modules?ref=tmpl"
        };
      };

      var _c28 = function _c28() {
        return {
          title: "Developer<br />Tools",
          href: "https://commercial.abp.io/tools?ref=tmpl"
        };
      };

      var _c29 = function _c29() {
        return {
          title: "UI<br />Themes",
          href: "https://commercial.abp.io/themes?ref=tmpl"
        };
      };

      var _c30 = function _c30() {
        return {
          title: "Premium Support",
          href: "https://support.abp.io/QA/Questions?ref=tmpl"
        };
      };

      var _c31 = "https://commercial.abp.io/additional-services?ref=tmpl";

      var _c32 = function _c32() {
        return {
          title: "Additional Services",
          href: _c31
        };
      };

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(oAuthService, authService) {
          _classCallCheck(this, HomeComponent);

          this.oAuthService = oAuthService;
          this.authService = authService;
        }

        _createClass(HomeComponent, [{
          key: "hasLoggedIn",
          get: function get() {
            return this.oAuthService.hasValidAccessToken();
          }
        }, {
          key: "login",
          value: function login() {
            this.authService.navigateToLogin();
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.??fac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__["OAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 69,
        vars: 96,
        consts: [[1, "container"], [1, "p-5", "text-center"], ["role", "alert", 1, "badge", "badge-success", "h5", "rounded", "mb-4"], [1, "m-1"], [1, "fas", "fa-rocket"], [1, "lead", "px-lg-5", "mx-lg-5"], ["class", "px-4 btn btn-primary ml-1", "role", "button", 3, "click", 4, "ngIf"], [1, "my-3", "text-center"], [1, "card", "mt-4", "mb-5"], [1, "card-body"], [1, "row", "text-center", "justify-content-md-center"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "row", "text-center", "mt-lg-3", "justify-content-md-center"], ["githubButtonsTemplate", ""], [1, "mt-5", "my-3", "text-center"], [1, "px-lg-5", "mx-lg-5", "py-3", "text-center"], ["href", "https://commercial.abp.io/", "target", "_blank"], [1, "mb-5", "text-center"], [1, "align-middle"], ["href", "https://twitter.com/abpframework", "target", "_blank", 1, "mx-2"], [1, "fa", "fa-twitter"], [1, "text-secondary"], ["href", "https://twitter.com/abpcommercial", "target", "_blank", 1, "mx-2"], ["href", "https://github.com/abpframework/abp", "target", "_blank", 1, "mx-2"], [1, "fa", "fa-github"], ["starterLinkTemplate", ""], ["featuresTemplate", ""], ["role", "button", 1, "px-4", "btn", "btn-primary", "ml-1", 3, "click"], [1, "fa", "fa-sign-in"], [1, "mb-1"], ["scrolling", "no", "src", "https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fabpframework%2Fabp&title=&aria-label=Star%20tabalinas%2Fjsgrid%20on%20GitHub&data-icon=octicon-star&data-text=Star&data-size=large&data-show-count=true", 2, "width", "122px", "height", "28px", "border", "none", "display", "inline-block", "margin-right", "4px"], ["scrolling", "no", "src", "https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fabpframework%2Fabp%2Fissues&title=&aria-label=Issue%20tabalinas%2Fjsgrid%20on%20GitHub&data-icon=octicon-issue-opened&data-text=Issue&data-size=large", 2, "width", "72px", "height", "28px", "border", "none", "display", "inline-block", "margin-right", "4px"], ["scrolling", "no", "src", "https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fabpframework%2Fabp%2Ffork&title=&aria-label=Fork%20tabalinas%2Fjsgrid%20on%20GitHub&data-icon=octicon-repo-forked&data-text=Fork&data-size=large&", 2, "width", "72px", "height", "28px", "border", "none", "display", "inline-block"], [1, "col-lg-4", "border-left"], [1, "p-4"], [1, "mb-3"], [1, "fas", "fa-cubes", "text-secondary", "d-block", "my-3", "fa-2x"], [3, "innerHTML"], [3, "ngTemplateOutlet", 4, "ngIf"], ["target", "_blank", "class", "btn btn-link px-1", 3, "href", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["target", "_blank", 1, "btn", "btn-link", "px-1", 3, "href"], [1, "fas", "fa-chevron-right"], [1, "col-lg-2", "border-left"], [1, "p-3"], [1, "fas", "fa-plus", "d-block", "mb-3", "fa-", "2x", "text-secondary"], ["target", "_blank", 1, "d-block", "mt-2", "btn", "btn-sm", "btn-link", 3, "href"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h5", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Congratulations, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "AppCore");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " is successfully running! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "abpLocalization");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](14, "abpLocalization");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, HomeComponent_a_15_Template, 4, 3, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Let's improve your application!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Here are some links to help you get started:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, HomeComponent_ng_container_24_Template, 1, 0, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, HomeComponent_ng_container_25_Template, 1, 0, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, HomeComponent_ng_container_26_Template, 1, 0, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, HomeComponent_ng_container_28_Template, 1, 0, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, HomeComponent_ng_template_29_Template, 4, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, HomeComponent_ng_container_31_Template, 1, 0, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, HomeComponent_ng_container_32_Template, 1, 0, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Meet the ABP Commercial");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "A Complete Web Application Platform Built on the ABP Framework");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "ABP Commercial");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " is a platform based on the open source ABP framework. It provides pre-built application modules, rapid application development tooling, professional UI themes, premium support and more. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, HomeComponent_ng_container_45_Template, 1, 0, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, HomeComponent_ng_container_46_Template, 1, 0, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, HomeComponent_ng_container_47_Template, 1, 0, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, HomeComponent_ng_container_48_Template, 1, 0, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, HomeComponent_ng_container_49_Template, 1, 0, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, HomeComponent_ng_container_50_Template, 1, 0, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " Abp Framework");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " Abp Commercial");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " abpframework");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](65, HomeComponent_ng_template_65_Template, 8, 4, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](67, HomeComponent_ng_template_67_Template, 8, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
          }

          if (rf & 2) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](30);

            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](66);

            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](11, 27, "::Welcome"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](14, 29, "::LongWelcomeMessage"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.hasLoggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](36, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](34, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](32, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](31, _c0)))));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](43, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](41, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](39, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](38, _c6)))));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](52, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](50, _c14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](47, _c12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](45, _c9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](46, _c11)))));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](59, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](57, _c16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](55, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](54, _c15)))));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](67, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](64, _c20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](62, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](61, _c18)), _r5)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](76, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](74, _c24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](71, _c12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](69, _c21), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](70, _c22)))));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r17)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](79, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](78, _c26)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r17)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](82, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](81, _c27)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r17)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](85, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](84, _c28)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r17)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](88, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](87, _c29)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r17)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](91, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](90, _c30)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", _r17)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](94, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](93, _c32)));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        pipes: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["LocalizationPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQUEiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlcyBmb3IgdGhlIGhvbWUgY29tcG9uZW50ICovIl19 */", ".col-lg-2.border-left[_ngcontent-%COMP%]:nth-of-type(6n + 1) {\n    border-left: 0 !important;\n  }\n\n  .col-lg-4.border-left[_ngcontent-%COMP%]:nth-of-type(3n + 1) {\n    border-left: 0 !important;\n  }\n\n  @media (max-width: 991px) {\n    .border-left[_ngcontent-%COMP%] {\n      border-left: 0 !important;\n    }\n  }"]
      });
      /***/
    },

    /***/
    "A3+G":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomeRoutingModule */

    /***/
    function A3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
        return HomeRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.component */
      "9vUh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
      }];

      var HomeRoutingModule = function HomeRoutingModule() {
        _classCallCheck(this, HomeRoutingModule);
      };

      HomeRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: HomeRoutingModule
      });
      HomeRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        factory: function HomeRoutingModule_Factory(t) {
          return new (t || HomeRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](HomeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @abp/ng.core */
      "HmNo");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @abp/ng.theme.basic */
      "Kxe9");
      /* harmony import */


      var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @abp/ng.theme.shared */
      "1REP");
      /* harmony import */


      var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-validate/core */
      "iWZL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
        type: SharedModule
      });
      SharedModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        providers: [],
        imports: [[_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_3__["ThemeSharedModule"], _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_2__["ThemeBasicModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_4__["NgxValidateCoreModule"]], _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_3__["ThemeSharedModule"], _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_2__["ThemeBasicModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_4__["NgxValidateCoreModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](SharedModule, {
          imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_3__["ThemeSharedModule"], _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_2__["ThemeBasicModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_4__["NgxValidateCoreModule"]],
          exports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_3__["ThemeSharedModule"], _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_2__["ThemeBasicModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_4__["NgxValidateCoreModule"]]
        });
      })();
      /***/

    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomeModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-routing.module */
      "A3+G");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component */
      "9vUh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: HomeModule
      });
      HomeModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        factory: function HomeModule_Factory(t) {
          return new (t || HomeModule)();
        },
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](HomeModule, {
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map