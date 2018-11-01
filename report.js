$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("navigation/Common.feature");
formatter.feature({
  "line": 1,
  "name": "Market smoke test cases",
  "description": "",
  "id": "market-smoke-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7381167826,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#hardcoded"
    }
  ],
  "line": 10,
  "name": "Catg : Alternatives ; Search for product with alternative option and make sure can view alternative products",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-alternatives-;-search-for-product-with-alternative-option-and-make-sure-can-view-alternative-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@market_smoke1"
    },
    {
      "line": 5,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 6,
      "name": "@market_smoke"
    },
    {
      "line": 7,
      "name": "@market_smoke_prod"
    },
    {
      "line": 8,
      "name": "@alternative"
    },
    {
      "line": 9,
      "name": "@alternativeproducts"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Search product by word \"DRAINAGE POUCH ONE-PIECE ACTIVELIFE OPEN PRE-CUT\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I am on the \"SearchResultPage\" Page and click at item \"SearchViewAlternativeLink\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I must be taken to an \u0027ShopAlternativesPage\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Element \"alternativesTitle\" has value \"Shop Alternatives\" in page \"ShopAlternativesPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Make sure element \"no_alternatives_present\" is not present in page \"\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 34354744728,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1173941433,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:13"
});
formatter.result({
  "duration": 71038913076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DRAINAGE POUCH ONE-PIECE ACTIVELIFE OPEN PRE-CUT",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 40090328705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 13
    },
    {
      "val": "SearchViewAlternativeLink",
      "offset": 55
    }
  ],
  "location": "itemdetailspage.groovy:77"
});
formatter.result({
  "duration": 30619224578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShopAlternativesPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 933712022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alternativesTitle",
      "offset": 9
    },
    {
      "val": "Shop Alternatives",
      "offset": 39
    },
    {
      "val": "ShopAlternativesPage",
      "offset": 67
    }
  ],
  "location": "common_csp.groovy:264"
});
formatter.result({
  "duration": 1928868840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no_alternatives_present",
      "offset": 19
    },
    {
      "val": "not present",
      "offset": 47
    },
    {
      "val": "",
      "offset": 68
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1490205407,
  "status": "passed"
});
formatter.after({
  "duration": 5964642,
  "status": "passed"
});
formatter.before({
  "duration": 22008434,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 20,
      "value": "#hardcoded"
    }
  ],
  "line": 27,
  "name": "Catg : Alternatives : View alternatives - link on the IDP",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-alternatives-:-view-alternatives---link-on-the-idp",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@market_smoke1"
    },
    {
      "line": 22,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 23,
      "name": "@market_smoke"
    },
    {
      "line": 24,
      "name": "@market_smoke_prod"
    },
    {
      "line": 25,
      "name": "@alternative"
    },
    {
      "line": 26,
      "name": "@alternative_plp"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select \"surgical gloves\" from products dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I am on the \"PlpPage\" Page and click at item \"AlternativeLink\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I must be taken to an \u0027ShopAlternativesPage\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Make sure element \"no_alternatives_present\" is not present in page \"\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Element \"alternativesTitle\" has value \"Shop Alternatives\" in page \"ShopAlternativesPage\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 27016129576,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 731083173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 10
    }
  ],
  "location": "categorynavigation.groovy:293"
});
formatter.result({
  "duration": 31661571643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 181478570100,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 180.0 seconds (failed with exception)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:138)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.DefaultWaitingSupport.doWaitFor(DefaultWaitingSupport.groovy:51)\n\tat geb.waiting.DefaultWaitingSupport.waitFor(DefaultWaitingSupport.groovy:46)\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\n\tat geb.Page.waitFor(Page.groovy:516)\n\tat geb.Page.waitFor(Page.groovy)\n\tat pages.CategoryLandingPage$__clinit__closure1.doCall(CategoryLandingPage.groovy:10)\n\tat pages.CategoryLandingPage$__clinit__closure1.doCall(CategoryLandingPage.groovy)\n\tat geb.Page.verifyThisPageAtOnly(Page.groovy:228)\n\tat geb.Page.verifyAt(Page.groovy:182)\n\tat geb.Page$verifyAt$4.call(Unknown Source)\n\tat geb.Page$verifyAt$4.call(Unknown Source)\n\tat geb.Browser.doAt(Browser.groovy:454)\n\tat geb.Browser.at(Browser.groovy:336)\n\tat geb.binding.BindingUpdater$InvocationForwarding.doCall(BindingUpdater.groovy:73)\n\tat steps.basepage.basepage$_run_closure31.doCall(basepage.groovy:203)\n\tat ✽.And I must be taken to an \u0027CategoryLandingPage\u0027(navigation/Common.feature:31)\nCaused by: Assertion failed: \n\n$(\u0027div\u0027, \u0027data-id\u0027: \u0027clpCategoryName\u0027) || $(\u0027#categoryLandingPageContainer\u0027) || $(\"div\", class: \"subCategoryGridWrapper\")\n|                                      |  |                                  |  |\n[]                                     |  []                                 |  []\n                                       false                                 false\n\n\tat pages.CategoryLandingPage$__clinit__closure1$_closure3.doCall(CategoryLandingPage.groovy:11)\n\tat pages.CategoryLandingPage$__clinit__closure1$_closure3.doCall(CategoryLandingPage.groovy)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:127)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.DefaultWaitingSupport.doWaitFor(DefaultWaitingSupport.groovy:51)\n\tat geb.waiting.DefaultWaitingSupport.waitFor(DefaultWaitingSupport.groovy:46)\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\n\tat geb.Page.waitFor(Page.groovy:516)\n\tat geb.Page.waitFor(Page.groovy)\n\tat pages.CategoryLandingPage$__clinit__closure1.doCall(CategoryLandingPage.groovy:10)\n\tat pages.CategoryLandingPage$__clinit__closure1.doCall(CategoryLandingPage.groovy)\n\tat geb.Page.verifyThisPageAtOnly(Page.groovy:228)\n\tat geb.Page.verifyAt(Page.groovy:182)\n\tat geb.Page$verifyAt$4.call(Unknown Source)\n\tat geb.Page$verifyAt$4.call(Unknown Source)\n\tat geb.Browser.doAt(Browser.groovy:454)\n\tat geb.Browser.at(Browser.groovy:336)\n\tat geb.binding.BindingUpdater$InvocationForwarding.doCall(BindingUpdater.groovy:73)\n\tat steps.basepage.basepage$_run_closure31.doCall(basepage.groovy:203)\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:155)\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:71)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:68)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.runtime.Runtime.run(Runtime.java:121)\n\tat cucumber.runtime.Runtime$run.call(Unknown Source)\n\tat com.cardinalhealth.market.config.CucumberRunner.run(CucumberRunner.groovy:29)\n\tat com.cardinalhealth.market.config.CucumberRunner$run$0.callStatic(Unknown Source)\n\tat com.cardinalhealth.market.config.CucumberRunner.runCucumber(CucumberRunner.groovy:19)\n\tat com.cardinalhealth.market.config.CucumberRunner$runCucumber.call(Unknown Source)\n\tat com.cardinalhealth.market.TestRunner.main(TestRunner.groovy:31)\n",
  "status": "failed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    },
    {
      "val": "AlternativeLink",
      "offset": 46
    }
  ],
  "location": "itemdetailspage.groovy:77"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ShopAlternativesPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "no_alternatives_present",
      "offset": 19
    },
    {
      "val": "not present",
      "offset": 47
    },
    {
      "val": "",
      "offset": 68
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "alternativesTitle",
      "offset": 9
    },
    {
      "val": "Shop Alternatives",
      "offset": 39
    },
    {
      "val": "ShopAlternativesPage",
      "offset": 67
    }
  ],
  "location": "common_csp.groovy:264"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1385720160,
  "status": "passed"
});
formatter.before({
  "duration": 49334427,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 38,
      "value": "#hardcoded"
    },
    {
      "line": 39,
      "value": "#orig_prod_product not present in stage (under additional details)"
    }
  ],
  "line": 44,
  "name": "Catg : Alternatives ; Open Alternative option and Verify details of ORIGINAL products",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-alternatives-;-open-alternative-option-and-verify-details-of-original-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@market_smoke"
    },
    {
      "line": 41,
      "name": "@market_smoke1"
    },
    {
      "line": 42,
      "name": "@alternative"
    },
    {
      "line": 43,
      "name": "@alternativeproducts_orig_prod_details"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Search product by word \"DRAINAGE POUCH ONE-PIECE ACTIVELIFE OPEN PRE-CUT\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I am on the \"SearchResultPage\" Page and click at item \"SearchViewAlternativeLink\"",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I must be taken to an \u0027ShopAlternativesPage\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Element \"alternativesTitle\" has value \"Shop Alternatives\" in page \"ShopAlternativesPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Make sure element \"no_alternatives_present\" is not present in page \"\"",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "Make sure elements \"orig_prod_manufacturername,orig_prod_material,orig_prod_title,orig_prod_selectbutton\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Make sure elements \"orig_prod_price,orig_prod_availibity,orig_prod_description,orig_prod_manufacturernumber\" are present",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 30407221561,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 640650669,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:13"
});
formatter.result({
  "duration": 9744071159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DRAINAGE POUCH ONE-PIECE ACTIVELIFE OPEN PRE-CUT",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 31611577426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 13
    },
    {
      "val": "SearchViewAlternativeLink",
      "offset": 55
    }
  ],
  "location": "itemdetailspage.groovy:77"
});
formatter.result({
  "duration": 11003385330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShopAlternativesPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 3272491239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alternativesTitle",
      "offset": 9
    },
    {
      "val": "Shop Alternatives",
      "offset": 39
    },
    {
      "val": "ShopAlternativesPage",
      "offset": 67
    }
  ],
  "location": "common_csp.groovy:264"
});
formatter.result({
  "duration": 2347919553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no_alternatives_present",
      "offset": 19
    },
    {
      "val": "not present",
      "offset": 47
    },
    {
      "val": "",
      "offset": 68
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1724131097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orig_prod_manufacturername,orig_prod_material,orig_prod_title,orig_prod_selectbutton",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 110
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 8497906693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orig_prod_price,orig_prod_availibity,orig_prod_description,orig_prod_manufacturernumber",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 113
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 22340494457,
  "status": "passed"
});
formatter.after({
  "duration": 547950,
  "status": "passed"
});
formatter.before({
  "duration": 21799620,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 74,
      "value": "#hardcoded"
    }
  ],
  "line": 81,
  "name": "Catg : Alternatives ; Search for alternative option and Verify details of ALTERNATIVE products",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-alternatives-;-search-for-alternative-option-and-verify-details-of-alternative-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 75,
      "name": "@market_smoke"
    },
    {
      "line": 76,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 77,
      "name": "@market_smoke1"
    },
    {
      "line": 78,
      "name": "@market_smoke_prod"
    },
    {
      "line": 79,
      "name": "@alternative"
    },
    {
      "line": 80,
      "name": "@alternativeproducts_alternative_prod_details"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "Search product by word \"DRAINAGE POUCH ONE-PIECE ACTIVELIFE OPEN PRE-CUT\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I am on the \"SearchResultPage\" Page and click at item \"SearchViewAlternativeLink\"",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "I must be taken to an \u0027ShopAlternativesPage\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "Element \"alternativesTitle\" has value \"Shop Alternatives\" in page \"ShopAlternativesPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "Make sure element \"no_alternatives_present\" is not present in page \"\"",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "Make sure elements \"all_alternatives,each_alternative,each_alternative_image,each_alternative_product,each_alternative_price,each_alternative_availibity,each_alternative_manufacturernumber\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Make sure elements \"each_alternative_manufacturername,each_alternative_material,each_alternative_title,each_alternative_selectbutton,each_alternative_description\" are present",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 24224538271,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 640448952,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:13"
});
formatter.result({
  "duration": 10712905537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DRAINAGE POUCH ONE-PIECE ACTIVELIFE OPEN PRE-CUT",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 26071088729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 13
    },
    {
      "val": "SearchViewAlternativeLink",
      "offset": 55
    }
  ],
  "location": "itemdetailspage.groovy:77"
});
formatter.result({
  "duration": 10801798532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShopAlternativesPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 850279989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alternativesTitle",
      "offset": 9
    },
    {
      "val": "Shop Alternatives",
      "offset": 39
    },
    {
      "val": "ShopAlternativesPage",
      "offset": 67
    }
  ],
  "location": "common_csp.groovy:264"
});
formatter.result({
  "duration": 1025673692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no_alternatives_present",
      "offset": 19
    },
    {
      "val": "not present",
      "offset": 47
    },
    {
      "val": "",
      "offset": 68
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 4493155963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all_alternatives,each_alternative,each_alternative_image,each_alternative_product,each_alternative_price,each_alternative_availibity,each_alternative_manufacturernumber",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 194
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 10215161986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "each_alternative_manufacturername,each_alternative_material,each_alternative_title,each_alternative_selectbutton,each_alternative_description",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 167
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 7587015031,
  "status": "passed"
});
formatter.after({
  "duration": 669894,
  "status": "passed"
});
formatter.before({
  "duration": 25963915,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "Catg : Compare : Add items to compare not more than 4 items /check for clear all/try",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-add-items-to-compare-not-more-than-4-items-/check-for-clear-all/try",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 94,
      "name": "@market_smoke"
    },
    {
      "line": 95,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 96,
      "name": "@market_smoke1"
    },
    {
      "line": 97,
      "name": "@market_smoke_prod"
    },
    {
      "line": 98,
      "name": "@compare"
    },
    {
      "line": 99,
      "name": "@add_items_to_compare"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "Add \"4\" items to compare and make sure compare tray appears",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "The count of element \"CompareTrayItem\" is \u00274\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "Make sure elements \"CompareTrayClearAll\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayItemImage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayItemNum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayItemImage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayItemNum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "I must see compare tray item \u00273\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I must see compare tray item \u00273\u0027 has \u0027CompareTrayItemImage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "I must see compare tray item \u00273\u0027 has \u0027CompareTrayItemNum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "I must see compare tray item \u00273\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I must see compare tray item \u00274\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "I must see compare tray item \u00274\u0027 has \u0027CompareTrayItemImage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I must see compare tray item \u00274\u0027 has \u0027CompareTrayItemNum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "I must see compare tray item \u00274\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "I must not see compare tray items",
  "keyword": "Then "
});
formatter.step({
  "line": 132,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 38045579260,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 673389064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 36651177716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 473092712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 12
    },
    {
      "val": "CompareTrayClearAll",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:351"
});
formatter.result({
  "duration": 2450158859,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 8824483477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 5
    }
  ],
  "location": "searchresultpage.groovy:579"
});
formatter.result({
  "duration": 52251081405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayItem",
      "offset": 22
    },
    {
      "val": "4",
      "offset": 43
    }
  ],
  "location": "searchresultpage.groovy:716"
});
formatter.result({
  "duration": 280643417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 5059165683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 723180086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 887046537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayClearAll",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 831865728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 1876622988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayItemImage",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 445195960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayItemNum",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 568325165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 428200005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 370497263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "CompareTrayItemImage",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 550650459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "CompareTrayItemNum",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 373310799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 1761346747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 409582840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    },
    {
      "val": "CompareTrayItemImage",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 3005876101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    },
    {
      "val": "CompareTrayItemNum",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 447947798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 475672608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 429272514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 30
    },
    {
      "val": "CompareTrayItemImage",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 402747340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 30
    },
    {
      "val": "CompareTrayItemNum",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 368880342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 407453255,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 8263386164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 23975054695,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 7376297159,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 10272872489,
  "status": "passed"
});
formatter.after({
  "duration": 1174570,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 140,
  "name": "Catg : Compare : Repeat 4times..(based on item ctn# 1-4)-Compare tray persist after 2nd search/page up/down \u0026 button disabled/enabled as expected",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 134,
      "name": "@market_smoke"
    },
    {
      "line": 135,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 136,
      "name": "@market_smoke1"
    },
    {
      "line": 137,
      "name": "@market_smoke_prod"
    },
    {
      "line": 138,
      "name": "@compare"
    },
    {
      "line": 139,
      "name": "@compare_two_four_items"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Add \"\u003ccompare_items\u003e\" items to compare and make sure compare tray appears",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "The count of element \"CompareTrayItem\" is \u0027\u003ccompare_items\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I see that the \"CompareTrayButton\" button is displayed as \u003cenabled_disabled\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "Search product by word \"P50\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "I see that the \"CompareTrayButton\" button is displayed as \u003cenabled_disabled\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "Navigate to element \"LoadMoreBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "Navigate to element module \"Logo\" on module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "I see that the \"CompareTrayButton\" button is displayed as \u003cenabled_disabled\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.examples({
  "line": 168,
  "name": "",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;",
  "rows": [
    {
      "cells": [
        "compare_items",
        "enabled_disabled"
      ],
      "line": 169,
      "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;1"
    },
    {
      "cells": [
        "1",
        "disabled"
      ],
      "line": 170,
      "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;2"
    },
    {
      "cells": [
        "2",
        "enabled"
      ],
      "line": 171,
      "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;3"
    },
    {
      "cells": [
        "3",
        "enabled"
      ],
      "line": 172,
      "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;4"
    },
    {
      "cells": [
        "4",
        "enabled"
      ],
      "line": 173,
      "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 21727857,
  "status": "passed"
});
formatter.scenario({
  "line": 170,
  "name": "Catg : Compare : Repeat 4times..(based on item ctn# 1-4)-Compare tray persist after 2nd search/page up/down \u0026 button disabled/enabled as expected",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 135,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 134,
      "name": "@market_smoke"
    },
    {
      "line": 137,
      "name": "@market_smoke_prod"
    },
    {
      "line": 138,
      "name": "@compare"
    },
    {
      "line": 139,
      "name": "@compare_two_four_items"
    },
    {
      "line": 136,
      "name": "@market_smoke1"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Add \"1\" items to compare and make sure compare tray appears",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "The count of element \"CompareTrayItem\" is \u00271\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I see that the \"CompareTrayButton\" button is displayed as disabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "Search product by word \"P50\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "I see that the \"CompareTrayButton\" button is displayed as disabled",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "Navigate to element \"LoadMoreBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "Navigate to element module \"Logo\" on module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "I see that the \"CompareTrayButton\" button is displayed as disabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 37377373526,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1496132408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 33074758374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 427432254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 12
    },
    {
      "val": "CompareTrayClearAll",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:351"
});
formatter.result({
  "duration": 1058015839,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 5957627570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    }
  ],
  "location": "searchresultpage.groovy:579"
});
formatter.result({
  "duration": 12617185745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayItem",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 43
    }
  ],
  "location": "searchresultpage.groovy:716"
});
formatter.result({
  "duration": 330698059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "disabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 2696978588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 723865702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1437763885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "P50",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 37653055791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 1751150596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "disabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 3528013415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1425519264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 752648073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoadMoreBtn",
      "offset": 21
    }
  ],
  "location": "common_csp.groovy:358"
});
formatter.result({
  "duration": 4640341827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 2553363222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 874520156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 1029591418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logo",
      "offset": 28
    },
    {
      "val": "globalHeader",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:362"
});
formatter.result({
  "duration": 6716914358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 575600026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "disabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 3995321924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 722061279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 2709391601,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 8469050957,
  "status": "passed"
});
formatter.after({
  "duration": 655841,
  "status": "passed"
});
formatter.before({
  "duration": 51539190,
  "status": "passed"
});
formatter.scenario({
  "line": 171,
  "name": "Catg : Compare : Repeat 4times..(based on item ctn# 1-4)-Compare tray persist after 2nd search/page up/down \u0026 button disabled/enabled as expected",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 135,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 134,
      "name": "@market_smoke"
    },
    {
      "line": 137,
      "name": "@market_smoke_prod"
    },
    {
      "line": 138,
      "name": "@compare"
    },
    {
      "line": 139,
      "name": "@compare_two_four_items"
    },
    {
      "line": 136,
      "name": "@market_smoke1"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Add \"2\" items to compare and make sure compare tray appears",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "The count of element \"CompareTrayItem\" is \u00272\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "Search product by word \"P50\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "Navigate to element \"LoadMoreBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "Navigate to element module \"Logo\" on module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 26968191794,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1562218231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 34504304484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 393300834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 12
    },
    {
      "val": "CompareTrayClearAll",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:351"
});
formatter.result({
  "duration": 1648163816,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 6217827255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 5
    }
  ],
  "location": "searchresultpage.groovy:579"
});
formatter.result({
  "duration": 21960786625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayItem",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 43
    }
  ],
  "location": "searchresultpage.groovy:716"
});
formatter.result({
  "duration": 255621772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 3330139375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 715776637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1371707819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "P50",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 26811267746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 406289252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 3061289109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 807316136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 788302245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoadMoreBtn",
      "offset": 21
    }
  ],
  "location": "common_csp.groovy:358"
});
formatter.result({
  "duration": 4629791972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 770874623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 738302441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 1882215691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logo",
      "offset": 28
    },
    {
      "val": "globalHeader",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:362"
});
formatter.result({
  "duration": 6422940709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 1670006744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 2708111186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 891367198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 802992294,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 14020541520,
  "status": "passed"
});
formatter.after({
  "duration": 468307,
  "status": "passed"
});
formatter.before({
  "duration": 22550506,
  "status": "passed"
});
formatter.scenario({
  "line": 172,
  "name": "Catg : Compare : Repeat 4times..(based on item ctn# 1-4)-Compare tray persist after 2nd search/page up/down \u0026 button disabled/enabled as expected",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 135,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 134,
      "name": "@market_smoke"
    },
    {
      "line": 137,
      "name": "@market_smoke_prod"
    },
    {
      "line": 138,
      "name": "@compare"
    },
    {
      "line": 139,
      "name": "@compare_two_four_items"
    },
    {
      "line": 136,
      "name": "@market_smoke1"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Add \"3\" items to compare and make sure compare tray appears",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "The count of element \"CompareTrayItem\" is \u00273\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "Search product by word \"P50\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "Navigate to element \"LoadMoreBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "Navigate to element module \"Logo\" on module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 28224313984,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 950758490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 24834803452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 496147991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 12
    },
    {
      "val": "CompareTrayClearAll",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:351"
});
formatter.result({
  "duration": 2200538570,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 5148504530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 5
    }
  ],
  "location": "searchresultpage.groovy:579"
});
formatter.result({
  "duration": 43369828666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayItem",
      "offset": 22
    },
    {
      "val": "3",
      "offset": 43
    }
  ],
  "location": "searchresultpage.groovy:716"
});
formatter.result({
  "duration": 271164346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 2746945800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 818176643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 769557768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "P50",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 39890833593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 448880934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 3557893347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1670488085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 896576876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoadMoreBtn",
      "offset": 21
    }
  ],
  "location": "common_csp.groovy:358"
});
formatter.result({
  "duration": 3308582504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 713269519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 765924657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 1468187992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logo",
      "offset": 28
    },
    {
      "val": "globalHeader",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:362"
});
formatter.result({
  "duration": 4879766666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 472509751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 3364297306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 871202904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1689764556,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 10200886784,
  "status": "passed"
});
formatter.after({
  "duration": 494529,
  "status": "passed"
});
formatter.before({
  "duration": 22792193,
  "status": "passed"
});
formatter.scenario({
  "line": 173,
  "name": "Catg : Compare : Repeat 4times..(based on item ctn# 1-4)-Compare tray persist after 2nd search/page up/down \u0026 button disabled/enabled as expected",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 135,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 134,
      "name": "@market_smoke"
    },
    {
      "line": 137,
      "name": "@market_smoke_prod"
    },
    {
      "line": 138,
      "name": "@compare"
    },
    {
      "line": 139,
      "name": "@compare_two_four_items"
    },
    {
      "line": 136,
      "name": "@market_smoke1"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Add \"4\" items to compare and make sure compare tray appears",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "The count of element \"CompareTrayItem\" is \u00274\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "Search product by word \"P50\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "Navigate to element \"LoadMoreBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "Navigate to element module \"Logo\" on module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 29404474801,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1784986929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 26207363266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 735627746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 12
    },
    {
      "val": "CompareTrayClearAll",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:351"
});
formatter.result({
  "duration": 1157736381,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 6892916271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 5
    }
  ],
  "location": "searchresultpage.groovy:579"
});
formatter.result({
  "duration": 47499025371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayItem",
      "offset": 22
    },
    {
      "val": "4",
      "offset": 43
    }
  ],
  "location": "searchresultpage.groovy:716"
});
formatter.result({
  "duration": 298674990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 2840613200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 722937864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1575270227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "P50",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 28285154438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 463598515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 4121462871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 717224963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 793751128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoadMoreBtn",
      "offset": 21
    }
  ],
  "location": "common_csp.groovy:358"
});
formatter.result({
  "duration": 5004178432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1015076660,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 725221522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 2003688824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logo",
      "offset": 28
    },
    {
      "val": "globalHeader",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:362"
});
formatter.result({
  "duration": 4168784979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 2503676141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 5267527340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 3174604251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1454310018,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 10020333768,
  "status": "passed"
});
formatter.after({
  "duration": 500925,
  "status": "passed"
});
formatter.before({
  "duration": 23046771,
  "status": "passed"
});
formatter.scenario({
  "line": 181,
  "name": "Catg : Compare : Add items to compare which not remained after log out",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-add-items-to-compare-which-not-remained-after-log-out",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 175,
      "name": "@market_smoke"
    },
    {
      "line": 176,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 177,
      "name": "@market_smoke1"
    },
    {
      "line": 178,
      "name": "@market_smoke_prod"
    },
    {
      "line": 179,
      "name": "@compare"
    },
    {
      "line": 180,
      "name": "@compare_tray_notafter_logout"
    }
  ]
});
formatter.step({
  "line": 182,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 183,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "Add \"2\" items to compare and make sure compare tray appears",
  "keyword": "Then "
});
formatter.step({
  "line": 189,
  "name": "The count of element \"CompareTrayItem\" is \u00272\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "Make sure elements \"CompareTrayClearAll\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayItemImage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayItemNum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayItemImage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayItemNum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 204,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 206,
  "name": "I must not see compare tray items",
  "keyword": "Then "
});
formatter.step({
  "line": 207,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 27097407302,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1091031229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 26428996566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 2038198850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 12
    },
    {
      "val": "CompareTrayClearAll",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:351"
});
formatter.result({
  "duration": 1482176521,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 6523950573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 5
    }
  ],
  "location": "searchresultpage.groovy:579"
});
formatter.result({
  "duration": 23805637978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayItem",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 43
    }
  ],
  "location": "searchresultpage.groovy:716"
});
formatter.result({
  "duration": 270163661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayButton",
      "offset": 16
    },
    {
      "val": "enabled",
      "offset": 58
    }
  ],
  "location": "searchresultpage.groovy:572"
});
formatter.result({
  "duration": 5058544200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 2269821334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1210524696,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayClearAll",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 772810924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 833841142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayItemImage",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 2589669573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayItemNum",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 439095292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 424355682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 465755041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "CompareTrayItemImage",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 483621171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "CompareTrayItemNum",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 421441286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 471203163,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 6559190428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 23819850652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 31053380386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 425449183,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 5014925930,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 8911445808,
  "status": "passed"
});
formatter.after({
  "duration": 532314,
  "status": "passed"
});
formatter.before({
  "duration": 23551663,
  "status": "passed"
});
formatter.scenario({
  "line": 215,
  "name": "Catg : Search ; Goto search results of selected product, capture item label of first, Search by itemlabel FULL name and verify details on SEARCH results",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-goto-search-results-of-selected-product,-capture-item-label-of-first,-search-by-itemlabel-full-name-and-verify-details-on-search-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 209,
      "name": "@market_smoke"
    },
    {
      "line": 210,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 211,
      "name": "@market_smoke1"
    },
    {
      "line": 212,
      "name": "@market_smoke_prod"
    },
    {
      "line": 213,
      "name": "@search"
    },
    {
      "line": 214,
      "name": "@search_by_full_product_name"
    }
  ]
});
formatter.step({
  "line": 216,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 217,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 220,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 221,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "Save value of element \"itemslabel\" to variable \"temp_product_name\"",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "Search product by word \"temp_product_name\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "Make sure elements \"ResultForm\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 226,
  "name": "Make sure elements \"ResultCategory\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 227,
  "name": "Make sure elements \"ResultItemList\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 25777670314,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1842032778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:276"
});
formatter.result({
  "duration": 31727189096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 890414469,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 44219128037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:336"
});
formatter.result({
  "duration": 798304966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "itemslabel",
      "offset": 23
    },
    {
      "val": "temp_product_name",
      "offset": 48
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 5491531922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_product_name",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 26880468482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 438470049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ResultForm",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 36
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 749623244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ResultCategory",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 40
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1057689106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ResultItemList",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 40
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1036124949,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 7895978658,
  "status": "passed"
});
formatter.after({
  "duration": 625093,
  "status": "passed"
});
formatter.before({
  "duration": 25798555,
  "status": "passed"
});
formatter.scenario({
  "line": 236,
  "name": "Catg : Search ; Goto search results of selected product, capture item label of first, Search by itemlabel partial name and verify details on SEARCH results",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-goto-search-results-of-selected-product,-capture-item-label-of-first,-search-by-itemlabel-partial-name-and-verify-details-on-search-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 230,
      "name": "@market_smoke1"
    },
    {
      "line": 231,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 232,
      "name": "@market_smoke"
    },
    {
      "line": 233,
      "name": "@market_smoke_prod"
    },
    {
      "line": 234,
      "name": "@search"
    },
    {
      "line": 235,
      "name": "@search_by_partialword"
    }
  ]
});
formatter.step({
  "line": 237,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 238,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 242,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "Save string part of element \"itemslabel\" to variable \"temp_product_name\"",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "Search product by word \"temp_product_name\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "Make sure elements \"ResultForm\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 247,
  "name": "Make sure elements \"ResultCategory\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "Make sure elements \"ResultItemList\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 21378261020,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 959975167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:276"
});
formatter.result({
  "duration": 20728100964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 846791665,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 49620555943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:336"
});
formatter.result({
  "duration": 892463206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "string",
      "offset": 5
    },
    {
      "val": "itemslabel",
      "offset": 29
    },
    {
      "val": "temp_product_name",
      "offset": 54
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 1445945563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_product_name",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 26957909715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 459700681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ResultForm",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 36
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 2019645747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ResultCategory",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 40
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 873803691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ResultItemList",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 40
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1516532261,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 10089317378,
  "status": "passed"
});
formatter.after({
  "duration": 556585,
  "status": "passed"
});
formatter.before({
  "duration": 23471941,
  "status": "passed"
});
formatter.scenario({
  "line": 257,
  "name": "Catg : Search ; Goto search results of selected product, capture material number, Search by material number and verify details on PLP",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-goto-search-results-of-selected-product,-capture-material-number,-search-by-material-number-and-verify-details-on-plp",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 251,
      "name": "@market_smoke1"
    },
    {
      "line": 252,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 253,
      "name": "@market_smoke"
    },
    {
      "line": 254,
      "name": "@market_smoke_prod"
    },
    {
      "line": 255,
      "name": "@search"
    },
    {
      "line": 256,
      "name": "@search_by_material_number"
    }
  ]
});
formatter.step({
  "line": 258,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 259,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 263,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 264,
  "name": "Save value of element \"material\" to variable \"temp_materialnum\"",
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "Save value of element \"manufacturer\" to variable \"temp_manufacturernum\"",
  "keyword": "And "
});
formatter.step({
  "line": 266,
  "name": "Search product by word \"temp_materialnum\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "if \"SearchResultPage\" page returned than hit on item that contains \"temp_materialnum\" and \"temp_manufacturernum\" and get to idp page",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "I am on \"ItemDetailsPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "Make sure elements \"TitleInfo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 270,
  "name": "Make sure elements \"Image_container\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "Make sure elements \"Details\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "Make sure elements \"Description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "Make sure elements \"Specification\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "Make sure elements \"Packaging\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 275,
  "name": "Make sure elements \"ManufacturerName\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "I verify the Text on \u0027materialnum\u0027 is \u0027temp_materialnum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 23903408913,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 710110704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:276"
});
formatter.result({
  "duration": 22571998110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 864676516,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 49344708219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:336"
});
formatter.result({
  "duration": 876456683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "material",
      "offset": 23
    },
    {
      "val": "temp_materialnum",
      "offset": 46
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 3806934027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacturer",
      "offset": 23
    },
    {
      "val": "temp_manufacturernum",
      "offset": 50
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 6470291656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_materialnum",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 46526879491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 4
    },
    {
      "val": "temp_materialnum",
      "offset": 68
    },
    {
      "val": "temp_manufacturernum",
      "offset": 91
    }
  ],
  "location": "common_csp.groovy:445"
});
formatter.result({
  "duration": 159160079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 832173547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TitleInfo",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1026076933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Image_container",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 41
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1318762560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Details",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 33
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 763744809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 37
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 931951628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Specification",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 39
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 705423037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Packaging",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 724339012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ManufacturerName",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1901725895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "materialnum",
      "offset": 22
    },
    {
      "val": "temp_materialnum",
      "offset": 39
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 31149314265,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 12572193481,
  "status": "passed"
});
formatter.after({
  "duration": 699085,
  "status": "passed"
});
formatter.before({
  "duration": 24263071,
  "status": "passed"
});
formatter.scenario({
  "line": 285,
  "name": "Catg : Search ; Goto search results of selected product, capture manufacturer number,  Search by manufacturer number and verify details on PLP",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-goto-search-results-of-selected-product,-capture-manufacturer-number,--search-by-manufacturer-number-and-verify-details-on-plp",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 279,
      "name": "@market_smoke1"
    },
    {
      "line": 280,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 281,
      "name": "@market_smoke"
    },
    {
      "line": 282,
      "name": "@market_smoke_prod"
    },
    {
      "line": 283,
      "name": "@search"
    },
    {
      "line": 284,
      "name": "@search_by_manufacturer"
    }
  ]
});
formatter.step({
  "line": 286,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 287,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "There should be image and title attribute displayed for each item",
  "keyword": "And "
});
formatter.step({
  "line": 291,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 292,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 293,
  "name": "Save value of element \"material\" to variable \"temp_materialnum\"",
  "keyword": "And "
});
formatter.step({
  "line": 294,
  "name": "Save value of element \"manufacturer\" to variable \"temp_manufacturernum\"",
  "keyword": "And "
});
formatter.step({
  "line": 295,
  "name": "Search product by word \"temp_manufacturernum\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 296,
  "name": "if \"SearchResultPage\" page returned than hit on item that contains \"temp_materialnum\" and \"temp_manufacturernum\" and get to idp page",
  "keyword": "And "
});
formatter.step({
  "line": 297,
  "name": "I am on \"ItemDetailsPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 298,
  "name": "I verify the Text on \u0027materialnum\u0027 is \u0027temp_materialnum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 299,
  "name": "I verify the Text on \u0027manufacturernum\u0027 is \u0027temp_manufacturernum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 300,
  "name": "Make sure elements \"TitleInfo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 301,
  "name": "Make sure elements \"Image_container\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 302,
  "name": "Make sure elements \"Details\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 303,
  "name": "Make sure elements \"Description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 304,
  "name": "Make sure elements \"Specification\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 305,
  "name": "Make sure elements \"Packaging\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 306,
  "name": "Make sure elements \"ManufacturerName\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 307,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 25611742175,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 829556816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:276"
});
formatter.result({
  "duration": 28534817612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 816454443,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:58"
});
formatter.result({
  "duration": 11366381417,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 48652743352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:336"
});
formatter.result({
  "duration": 946794594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "material",
      "offset": 23
    },
    {
      "val": "temp_materialnum",
      "offset": 46
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 6979971830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacturer",
      "offset": 23
    },
    {
      "val": "temp_manufacturernum",
      "offset": 50
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 5126840435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_manufacturernum",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 48801335770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 4
    },
    {
      "val": "temp_materialnum",
      "offset": 68
    },
    {
      "val": "temp_manufacturernum",
      "offset": 91
    }
  ],
  "location": "common_csp.groovy:445"
});
formatter.result({
  "duration": 154538609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 700651331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "materialnum",
      "offset": 22
    },
    {
      "val": "temp_materialnum",
      "offset": 39
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 36614086763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacturernum",
      "offset": 22
    },
    {
      "val": "temp_manufacturernum",
      "offset": 43
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 38097397169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TitleInfo",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 795010759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Image_container",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 41
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1761810044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Details",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 33
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 762746214,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 37
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 732622636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Specification",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 39
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 863218332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Packaging",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 750834008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ManufacturerName",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 893020005,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 8457167613,
  "status": "passed"
});
formatter.after({
  "duration": 631822,
  "status": "passed"
});
formatter.before({
  "duration": 27288082,
  "status": "passed"
});
formatter.scenario({
  "line": 315,
  "name": "Catg : Search ; TYPEAHEAD CHECK- search results of product, capture item label,Search by itemlabel partial name and verify details on TYPEAHEAD results",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-typeahead-check--search-results-of-product,-capture-item-label,search-by-itemlabel-partial-name-and-verify-details-on-typeahead-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 309,
      "name": "@market_smoke1"
    },
    {
      "line": 310,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 311,
      "name": "@market_smoke"
    },
    {
      "line": 312,
      "name": "@market_smoke_prod"
    },
    {
      "line": 313,
      "name": "@search"
    },
    {
      "line": 314,
      "name": "@search_typeahead_product_name"
    }
  ]
});
formatter.step({
  "line": 316,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 317,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 319,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 320,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 321,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 322,
  "name": "Save string part of element \"itemslabel\" to variable \"temp_product_name\"",
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "Save string part of element \"ResultCategory\" to variable \"temp_category\"",
  "keyword": "And "
});
formatter.step({
  "line": 324,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 325,
  "name": "Enter Text \"temp_product_name\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 326,
  "name": "Verify if option with name \"temp_category\" in list \"TypeaheadCategoriesList\" is present on global module",
  "keyword": "And "
});
formatter.step({
  "line": 327,
  "name": "Save current url value in variable \"temp_current_url\"",
  "keyword": "And "
});
formatter.step({
  "line": 328,
  "name": "Select option with name \"temp_category\" from \"TypeaheadCategoriesList\" on global module",
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "verify if current url contains \"temp_current_url\"",
  "keyword": "And "
});
formatter.step({
  "line": 330,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 24033468495,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 667603949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:276"
});
formatter.result({
  "duration": 24092321927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 2017672620,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 48736420458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:336"
});
formatter.result({
  "duration": 815163675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "string",
      "offset": 5
    },
    {
      "val": "itemslabel",
      "offset": 29
    },
    {
      "val": "temp_product_name",
      "offset": 54
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 1836269914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "string",
      "offset": 5
    },
    {
      "val": "ResultCategory",
      "offset": 29
    },
    {
      "val": "temp_category",
      "offset": 58
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 4207146309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 918585439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_product_name",
      "offset": 12
    },
    {
      "val": "SearchBox",
      "offset": 50
    },
    {
      "val": "globalHeader",
      "offset": 72
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 16683384870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_category",
      "offset": 28
    },
    {
      "val": "TypeaheadCategoriesList",
      "offset": 52
    },
    {
      "val": "present",
      "offset": 80
    }
  ],
  "location": "searchresultpage.groovy:1220"
});
formatter.result({
  "duration": 18728892074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_current_url",
      "offset": 36
    }
  ],
  "location": "common_csp.groovy:376"
});
formatter.result({
  "duration": 144104700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_category",
      "offset": 25
    },
    {
      "val": "TypeaheadCategoriesList",
      "offset": 46
    }
  ],
  "location": "searchresultpage.groovy:1181"
});
formatter.result({
  "duration": 9876654488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_current_url",
      "offset": 32
    }
  ],
  "location": "common_csp.groovy:382"
});
formatter.result({
  "duration": 823412724,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 6489609739,
  "status": "passed"
});
formatter.after({
  "duration": 559372,
  "status": "passed"
});
formatter.before({
  "duration": 24362135,
  "status": "passed"
});
formatter.scenario({
  "line": 338,
  "name": "Catg : Search ; TYPEAHEAD CHECK- Search results ,capture material num of first, Search by \u0026 select from typeahead material num and verify result returned",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-typeahead-check--search-results-,capture-material-num-of-first,-search-by-\u0026-select-from-typeahead-material-num-and-verify-result-returned",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 332,
      "name": "@market_smoke1"
    },
    {
      "line": 333,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 334,
      "name": "@market_smoke"
    },
    {
      "line": 335,
      "name": "@market_smoke_prod"
    },
    {
      "line": 336,
      "name": "@search"
    },
    {
      "line": 337,
      "name": "@search_typeahead_material"
    }
  ]
});
formatter.step({
  "line": 339,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 340,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 341,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 342,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 344,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 345,
  "name": "Save whole part of element \"material\" to variable \"temp_materialnum\"",
  "keyword": "And "
});
formatter.step({
  "line": 346,
  "name": "Save value of element \"manufacturer\" to variable \"temp_manufacturernum\"",
  "keyword": "And "
});
formatter.step({
  "line": 347,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 348,
  "name": "Enter Text \"temp_materialnum\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 349,
  "name": "Verify if option with name \"temp_materialnum\" in list \"TypeaheadMaterialsList\" is present on global module",
  "keyword": "And "
});
formatter.step({
  "line": 350,
  "name": "Select option with name \"temp_materialnum\" from \"TypeaheadMaterialsList\" on global module",
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "if \"SearchResultPage\" page returned than hit on item that contains \"temp_materialnum\" and \"temp_manufacturernum\" and get to idp page",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "I am on \"ItemDetailsPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "I verify the Text on \u0027materialnum\u0027 is \u0027temp_materialnum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "Make sure elements \"TitleInfo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 355,
  "name": "Make sure elements \"Image_container\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 356,
  "name": "Make sure elements \"Details\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "Make sure elements \"Description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 358,
  "name": "Make sure elements \"Specification\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 359,
  "name": "Make sure elements \"Packaging\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 360,
  "name": "Make sure elements \"ManufacturerName\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 361,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 22802234574,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1522550009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:276"
});
formatter.result({
  "duration": 28233983977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 2687179149,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 56075914297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:336"
});
formatter.result({
  "duration": 1113443455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "whole",
      "offset": 5
    },
    {
      "val": "material",
      "offset": 28
    },
    {
      "val": "temp_materialnum",
      "offset": 51
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 2209389501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacturer",
      "offset": 23
    },
    {
      "val": "temp_manufacturernum",
      "offset": 50
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 4732893416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 856435009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_materialnum",
      "offset": 12
    },
    {
      "val": "SearchBox",
      "offset": 49
    },
    {
      "val": "globalHeader",
      "offset": 71
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 11867434174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_materialnum",
      "offset": 28
    },
    {
      "val": "TypeaheadMaterialsList",
      "offset": 55
    },
    {
      "val": "present",
      "offset": 82
    }
  ],
  "location": "searchresultpage.groovy:1220"
});
formatter.result({
  "duration": 6561465642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_materialnum",
      "offset": 25
    },
    {
      "val": "TypeaheadMaterialsList",
      "offset": 49
    }
  ],
  "location": "searchresultpage.groovy:1181"
});
formatter.result({
  "duration": 18661613092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 4
    },
    {
      "val": "temp_materialnum",
      "offset": 68
    },
    {
      "val": "temp_manufacturernum",
      "offset": 91
    }
  ],
  "location": "common_csp.groovy:445"
});
formatter.result({
  "duration": 132872041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 1003243922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "materialnum",
      "offset": 22
    },
    {
      "val": "temp_materialnum",
      "offset": 39
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 28202690531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TitleInfo",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 749504270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Image_container",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 41
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1063271998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Details",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 33
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 741645763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 37
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 839093559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Specification",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 39
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 735730448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Packaging",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 723695761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ManufacturerName",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 849119495,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 10190952371,
  "status": "passed"
});
formatter.after({
  "duration": 1436731,
  "status": "passed"
});
formatter.before({
  "duration": 25376097,
  "status": "passed"
});
formatter.scenario({
  "line": 370,
  "name": "Catg : Search ; TYPEAHEAD CHECK- search results ,capture manufacturer num of first, Search by \u0026 select from typeahead manufacturer num and verify result returned",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-typeahead-check--search-results-,capture-manufacturer-num-of-first,-search-by-\u0026-select-from-typeahead-manufacturer-num-and-verify-result-returned",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 364,
      "name": "@market_smoke1"
    },
    {
      "line": 365,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 366,
      "name": "@market_smoke"
    },
    {
      "line": 367,
      "name": "@market_smoke_prod"
    },
    {
      "line": 368,
      "name": "@search"
    },
    {
      "line": 369,
      "name": "@search_typeahead_manufacturer"
    }
  ]
});
formatter.step({
  "line": 371,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 372,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 373,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 374,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 375,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 376,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 377,
  "name": "Save whole part of element \"manufacturer\" to variable \"temp_manufacturernum\"",
  "keyword": "And "
});
formatter.step({
  "line": 378,
  "name": "Save value of element \"material\" to variable \"temp_materialnum\"",
  "keyword": "And "
});
formatter.step({
  "line": 379,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 380,
  "name": "Enter Text \"temp_manufacturernum\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 381,
  "name": "Verify if option with name \"temp_manufacturernum\" in list \"TypeaheadManufacturerList\" is present on global module",
  "keyword": "And "
});
formatter.step({
  "line": 382,
  "name": "Select option with name \"temp_manufacturernum\" from \"TypeaheadManufacturerList\" on global module",
  "keyword": "And "
});
formatter.step({
  "line": 383,
  "name": "if \"SearchResultPage\" page returned than hit on item that contains \"temp_materialnum\" and \"temp_manufacturernum\" and get to idp page",
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "I am on \"ItemDetailsPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 386,
  "name": "I verify the Text on \u0027manufacturernum\u0027 is \u0027temp_manufacturernum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 387,
  "name": "Make sure elements \"TitleInfo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 388,
  "name": "Make sure elements \"Image_container\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 389,
  "name": "Make sure elements \"Details\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "Make sure elements \"Description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "Make sure elements \"Specification\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 392,
  "name": "Make sure elements \"Packaging\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 393,
  "name": "Make sure elements \"ManufacturerName\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 394,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 20974069330,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 642316055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:276"
});
formatter.result({
  "duration": 25374859150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 860624148,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 40051931390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:336"
});
formatter.result({
  "duration": 897172223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "whole",
      "offset": 5
    },
    {
      "val": "manufacturer",
      "offset": 28
    },
    {
      "val": "temp_manufacturernum",
      "offset": 55
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 2202325946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "material",
      "offset": 23
    },
    {
      "val": "temp_materialnum",
      "offset": 46
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 4675384859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 2132519072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_manufacturernum",
      "offset": 12
    },
    {
      "val": "SearchBox",
      "offset": 53
    },
    {
      "val": "globalHeader",
      "offset": 75
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 14627211596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_manufacturernum",
      "offset": 28
    },
    {
      "val": "TypeaheadManufacturerList",
      "offset": 59
    },
    {
      "val": "present",
      "offset": 89
    }
  ],
  "location": "searchresultpage.groovy:1220"
});
formatter.result({
  "duration": 8867863827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_manufacturernum",
      "offset": 25
    },
    {
      "val": "TypeaheadManufacturerList",
      "offset": 53
    }
  ],
  "location": "searchresultpage.groovy:1181"
});
formatter.result({
  "duration": 36408292338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 4
    },
    {
      "val": "temp_materialnum",
      "offset": 68
    },
    {
      "val": "temp_manufacturernum",
      "offset": 91
    }
  ],
  "location": "common_csp.groovy:445"
});
formatter.result({
  "duration": 142759161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 1884508112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacturernum",
      "offset": 22
    },
    {
      "val": "temp_manufacturernum",
      "offset": 43
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 29534023961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TitleInfo",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 716131331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Image_container",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 41
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 689976974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Details",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 33
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1878263682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 37
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 739552614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Specification",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 39
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 729421932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Packaging",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 722934039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ManufacturerName",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1174732898,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 6952955369,
  "status": "passed"
});
formatter.after({
  "duration": 755607,
  "status": "passed"
});
formatter.before({
  "duration": 26286179,
  "status": "passed"
});
formatter.scenario({
  "line": 402,
  "name": "Catg : My Account ; Access My Account options",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-my-account-;-access-my-account-options",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 396,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 397,
      "name": "@market_smoke1"
    },
    {
      "line": 398,
      "name": "@market_smoke_prod"
    },
    {
      "line": 399,
      "name": "@market_smoke"
    },
    {
      "line": 400,
      "name": "@my_account"
    },
    {
      "line": 401,
      "name": "@My_Account_options"
    }
  ]
});
formatter.step({
  "line": 403,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 404,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 405,
  "name": "Make sure element \"welcomeUser\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 406,
  "name": "Make sure element \"welcomeUser_Username\" value is not null in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 407,
  "name": "I click element \u0027MyAccount\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 408,
  "name": "Make sure element \"myAccountdropdown\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 409,
  "name": "Make sure element \"myAccount_changeaccount\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 410,
  "name": "Make sure element \"myAccount_logout\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 411,
  "name": "I click element \u0027myAccount_changeaccount\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 412,
  "name": "the system must display an account selection section on the page as Select Account,Sold To,Ship To,Search Sold To\u0027s or Ship To\u0027s,View All Accounts,Cancel,Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 413,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "verify if current url contains \"cardinalhealth.com/login\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 21333153730,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 5261800946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "welcomeUser",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 35
    },
    {
      "val": "global",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 8298867697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "welcomeUser_Username",
      "offset": 19
    },
    {
      "val": "not null",
      "offset": 50
    },
    {
      "val": "global",
      "offset": 68
    }
  ],
  "location": "common_csp.groovy:130"
});
formatter.result({
  "duration": 21647703740,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MyAccount",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 12428575369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myAccountdropdown",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 41
    },
    {
      "val": "global",
      "offset": 58
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 2383147273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myAccount_changeaccount",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 47
    },
    {
      "val": "global",
      "offset": 64
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 3044439926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myAccount_logout",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 40
    },
    {
      "val": "global",
      "offset": 57
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1819126660,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myAccount_changeaccount",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 7117944681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select Account",
      "offset": 68
    },
    {
      "val": "Sold To",
      "offset": 83
    },
    {
      "val": "Ship To",
      "offset": 91
    },
    {
      "val": "Search Sold To\u0027s or Ship To\u0027s",
      "offset": 99
    },
    {
      "val": "View All Accounts",
      "offset": 129
    },
    {
      "val": "Cancel",
      "offset": 147
    },
    {
      "val": "Change Account",
      "offset": 154
    }
  ],
  "location": "changeaccountdropdown.groovy:40"
});
formatter.result({
  "duration": 10548264020,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 9589254668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cardinalhealth.com/login",
      "offset": 32
    }
  ],
  "location": "common_csp.groovy:382"
});
formatter.result({
  "duration": 137984185,
  "status": "passed"
});
formatter.after({
  "duration": 387370,
  "status": "passed"
});
formatter.before({
  "duration": 29335829,
  "status": "passed"
});
formatter.scenario({
  "line": 422,
  "name": "Catg : My Account ; My profile info in My Account options",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-my-account-;-my-profile-info-in-my-account-options",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 416,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 417,
      "name": "@market_smoke1"
    },
    {
      "line": 418,
      "name": "@market_smoke_prod"
    },
    {
      "line": 419,
      "name": "@market_smoke"
    },
    {
      "line": 420,
      "name": "@my_account"
    },
    {
      "line": 421,
      "name": "@My_Account_profile_info"
    }
  ]
});
formatter.step({
  "line": 423,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 424,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 425,
  "name": "I click element \u0027MyAccount\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 426,
  "name": "I click element \u0027Profileinfo\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 427,
  "name": "I am on \"UserProfilePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 428,
  "name": "Make sure element \"profile_FirstName\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 429,
  "name": "Make sure element \"profile_LastName\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 430,
  "name": "Make sure element \"profile_PhoneNumber1\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 431,
  "name": "Make sure element \"profile_PhoneNumber2\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 432,
  "name": "Make sure element \"profile_PhoneNumber3\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 433,
  "name": "Make sure element \"profile_PhoneExtension\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 434,
  "name": "Make sure element \"profile_EmailAddress\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 435,
  "name": "Make sure element \"profile_SaveChangesButton\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 436,
  "name": "Make sure element \"profile_user_pass_security\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 437,
  "name": "Make sure element \"profile_username\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 438,
  "name": "Make sure element \"profile_password\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 439,
  "name": "Make sure element \"profile_security\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 440,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 441,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 22931939812,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 5481103569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MyAccount",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 14999754074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Profileinfo",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 14663963636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UserProfilePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 810892925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_FirstName",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 41
    },
    {
      "val": "",
      "offset": 58
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1176249288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_LastName",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 40
    },
    {
      "val": "",
      "offset": 57
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1372738013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneNumber1",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 44
    },
    {
      "val": "",
      "offset": 61
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1817454662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneNumber2",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 44
    },
    {
      "val": "",
      "offset": 61
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1147859361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneNumber3",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 44
    },
    {
      "val": "",
      "offset": 61
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1270219070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneExtension",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 46
    },
    {
      "val": "",
      "offset": 63
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 2251549915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_EmailAddress",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 44
    },
    {
      "val": "",
      "offset": 61
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1437976147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_SaveChangesButton",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 49
    },
    {
      "val": "",
      "offset": 66
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 1213965114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_user_pass_security",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 50
    },
    {
      "val": "",
      "offset": 67
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 2816185859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_username",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 40
    },
    {
      "val": "",
      "offset": 57
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 4220952108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_password",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 40
    },
    {
      "val": "",
      "offset": 57
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 3545223681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_security",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 40
    },
    {
      "val": "",
      "offset": 57
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 2832937066,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 6176144867,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 11245477802,
  "status": "passed"
});
formatter.after({
  "duration": 389976,
  "status": "passed"
});
formatter.before({
  "duration": 23365785,
  "status": "passed"
});
formatter.scenario({
  "line": 449,
  "name": "Catg : My Account ; TEST CASE WILL FAIL- NEW REQUIREMENT, MKT-5645 CREATED for EDITING PROFILE - Edit My profile options",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-my-account-;-test-case-will-fail--new-requirement,-mkt-5645-created-for-editing-profile---edit-my-profile-options",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 443,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 444,
      "name": "@market_smoke1"
    },
    {
      "line": 445,
      "name": "@market_smoke_prod"
    },
    {
      "line": 446,
      "name": "@market_smoke"
    },
    {
      "line": 447,
      "name": "@my_account"
    },
    {
      "line": 448,
      "name": "@My_Account_profile_edit"
    }
  ]
});
formatter.step({
  "line": 450,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 451,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 452,
  "name": "I click element \u0027MyAccount\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 453,
  "name": "I click element \u0027Profileinfo\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 454,
  "name": "I am on \"UserProfilePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 456,
  "name": "Save value of element \"profile_FirstName\" to variable \"temp_firstname\"",
  "keyword": "And "
});
formatter.step({
  "line": 457,
  "name": "Save value of element \"profile_LastName\" to variable \"temp_lastname\"",
  "keyword": "And "
});
formatter.step({
  "line": 458,
  "name": "Save value of element \"profile_PhoneNumber1\" to variable \"temp_phonenumber1\"",
  "keyword": "And "
});
formatter.step({
  "line": 459,
  "name": "Save value of element \"profile_PhoneNumber2\" to variable \"temp_phonenumber2\"",
  "keyword": "And "
});
formatter.step({
  "line": 460,
  "name": "Save value of element \"profile_PhoneNumber2\" to variable \"temp_phonenumber2\"",
  "keyword": "And "
});
formatter.step({
  "line": 461,
  "name": "Save value of element \"profile_PhoneExtension\" to variable \"temp_phoneextension\"",
  "keyword": "And "
});
formatter.step({
  "line": 462,
  "name": "Save value of element \"profile_EmailAddress\" to variable \"temp_emailaddress\"",
  "keyword": "And "
});
formatter.step({
  "line": 464,
  "name": "I Enter Text \"profile_FirstName\" in Text Box field \"profile_FirstName\"",
  "keyword": "And "
});
formatter.step({
  "line": 465,
  "name": "I Enter Text \"profile_LastName\" in Text Box field \"profile_LastName\"",
  "keyword": "And "
});
formatter.step({
  "line": 466,
  "name": "I Enter Text \"213\" in Text Box field \"profile_PhoneNumber1\"",
  "keyword": "And "
});
formatter.step({
  "line": 467,
  "name": "I Enter Text \"456\" in Text Box field \"profile_PhoneNumber2\"",
  "keyword": "And "
});
formatter.step({
  "line": 468,
  "name": "I Enter Text \"2341\" in Text Box field \"profile_PhoneNumber3\"",
  "keyword": "And "
});
formatter.step({
  "line": 469,
  "name": "I Enter Text \"231\" in Text Box field \"profile_PhoneExtension\"",
  "keyword": "And "
});
formatter.step({
  "line": 470,
  "name": "I Enter Text \"test@test.com\" in Text Box field \"profile_EmailAddress\"",
  "keyword": "And "
});
formatter.step({
  "line": 471,
  "name": "I click at Item \u0027profile_SaveChangesButton\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 472,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 473,
  "name": "I click element \u0027MyAccount\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 474,
  "name": "I click element \u0027Profileinfo\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 475,
  "name": "I am on \"UserProfilePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 476,
  "name": "I verify the Text on \u0027profile_FirstName\u0027 is \u0027profile_FirstName\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 477,
  "name": "I verify the Text on \u0027profile_LastName\u0027 is \u0027profile_LastName\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 478,
  "name": "I verify the Text on \u0027profile_PhoneNumber1\u0027 is \u0027213\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 479,
  "name": "I verify the Text on \u0027profile_PhoneNumber2\u0027 is \u0027456\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "I verify the Text on \u0027profile_PhoneNumber2\u0027 is \u00272341\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 481,
  "name": "I verify the Text on \u0027profile_PhoneExtension\u0027 is \u0027231\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 482,
  "name": "I verify the Text on \u0027profile_EmailAddress\u0027 is \u0027test@test.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 484,
  "name": "I Enter Text \"temp_firstname\" in Text Box field \"profile_FirstName\"",
  "keyword": "And "
});
formatter.step({
  "line": 485,
  "name": "I Enter Text \"temp_lastname\" in Text Box field \"profile_LastName\"",
  "keyword": "And "
});
formatter.step({
  "line": 486,
  "name": "I Enter Text \"temp_phonenumber1\" in Text Box field \"213\"",
  "keyword": "And "
});
formatter.step({
  "line": 487,
  "name": "I Enter Text \"temp_phonenumber2\" in Text Box field \"456\"",
  "keyword": "And "
});
formatter.step({
  "line": 488,
  "name": "I Enter Text \"temp_phonenumber3\" in Text Box field \"2341\"",
  "keyword": "And "
});
formatter.step({
  "line": 489,
  "name": "I Enter Text \"temp_phoneextension\" in Text Box field \"231\"",
  "keyword": "And "
});
formatter.step({
  "line": 490,
  "name": "I Enter Text \"temp_emailaddress\" in Text Box field \"test@test.com\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 20141867327,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 6584883971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MyAccount",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 11631115829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Profileinfo",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 14685590468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UserProfilePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 1281816552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_FirstName",
      "offset": 23
    },
    {
      "val": "temp_firstname",
      "offset": 55
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 4672877060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_LastName",
      "offset": 23
    },
    {
      "val": "temp_lastname",
      "offset": 54
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 3587254469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneNumber1",
      "offset": 23
    },
    {
      "val": "temp_phonenumber1",
      "offset": 58
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 5775295652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneNumber2",
      "offset": 23
    },
    {
      "val": "temp_phonenumber2",
      "offset": 58
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 4736548266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneNumber2",
      "offset": 23
    },
    {
      "val": "temp_phonenumber2",
      "offset": 58
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 6786273954,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneExtension",
      "offset": 23
    },
    {
      "val": "temp_phoneextension",
      "offset": 60
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 3177122828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_EmailAddress",
      "offset": 23
    },
    {
      "val": "temp_emailaddress",
      "offset": 58
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 4510480814,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_FirstName",
      "offset": 14
    },
    {
      "val": "profile_FirstName",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "duration": 4977804981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_LastName",
      "offset": 14
    },
    {
      "val": "profile_LastName",
      "offset": 51
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "duration": 12201004998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "213",
      "offset": 14
    },
    {
      "val": "profile_PhoneNumber1",
      "offset": 38
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "duration": 5814271234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456",
      "offset": 14
    },
    {
      "val": "profile_PhoneNumber2",
      "offset": 38
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "duration": 5388197252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2341",
      "offset": 14
    },
    {
      "val": "profile_PhoneNumber3",
      "offset": 39
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "duration": 4571045980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "231",
      "offset": 14
    },
    {
      "val": "profile_PhoneExtension",
      "offset": 38
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "duration": 5029792619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@test.com",
      "offset": 14
    },
    {
      "val": "profile_EmailAddress",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "duration": 6249833277,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_SaveChangesButton",
      "offset": 17
    }
  ],
  "location": "itemdetailspage.groovy:62"
});
formatter.result({
  "duration": 5992222344,
  "error_message": "java.lang.AssertionError: pages.UserProfilePage -\u003e profile_SaveChangesButton: geb.navigator.NonEmptyNavigator cannot be interacted and hence cannot be clicked ,exception ...org.openqa.selenium.ElementNotVisibleException: element not interactable\n  (Session info: chrome\u003d70.0.3538.67)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 188 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027132427a1-150e-489a-70b8-d220c7de56c0\u0027, ip: \u002710.254.0.10\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.14.72-68.55.amzn1.x86_64\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49750}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, takesScreenshot\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a), userDataDir\u003dC:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\scoped_dir2144_24032}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, hasMetadata\u003dtrue, handlesAlerts\u003dtrue, databaseEnabled\u003dfalse, version\u003d70.0.3538.67, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, webdriver.remote.sessionid\u003dc2a03b09b8c14531bcfa4a32de89a2ae, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: c2a03b09b8c14531bcfa4a32de89a2ae. Expression: false\n\tat functionlib.Elements.click_on_page(Elements.groovy:391)\n\tat functionlib.Elements.click_on_page(Elements.groovy)\n\tat functionlib.Elements$click_on_page$2.call(Unknown Source)\n\tat steps.itemdetails.itemdetailspage$_run_closure7.doCall(itemdetailspage.groovy:66)\n\tat ✽.And I click at Item \u0027profile_SaveChangesButton\u0027(navigation/Common.feature:471)\n",
  "status": "failed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MyAccount",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Profileinfo",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "UserProfilePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_FirstName",
      "offset": 22
    },
    {
      "val": "profile_FirstName",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_LastName",
      "offset": 22
    },
    {
      "val": "profile_LastName",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneNumber1",
      "offset": 22
    },
    {
      "val": "213",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneNumber2",
      "offset": 22
    },
    {
      "val": "456",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneNumber2",
      "offset": 22
    },
    {
      "val": "2341",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneExtension",
      "offset": 22
    },
    {
      "val": "231",
      "offset": 50
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_EmailAddress",
      "offset": 22
    },
    {
      "val": "test@test.com",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_firstname",
      "offset": 14
    },
    {
      "val": "profile_FirstName",
      "offset": 49
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_lastname",
      "offset": 14
    },
    {
      "val": "profile_LastName",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_phonenumber1",
      "offset": 14
    },
    {
      "val": "213",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_phonenumber2",
      "offset": 14
    },
    {
      "val": "456",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_phonenumber3",
      "offset": 14
    },
    {
      "val": "2341",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_phoneextension",
      "offset": 14
    },
    {
      "val": "231",
      "offset": 54
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_emailaddress",
      "offset": 14
    },
    {
      "val": "test@test.com",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 878540053,
  "status": "passed"
});
formatter.before({
  "duration": 29804192,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 491,
      "value": "#    And I click at Item \u0027profile_SaveChangesButton\u0027"
    },
    {
      "line": 492,
      "value": "#    When I view the Global Header"
    },
    {
      "line": 493,
      "value": "#    And I click element \u0027MyAccount\u0027 on globalHeader"
    },
    {
      "line": 494,
      "value": "#    And I click element \u0027Profileinfo\u0027 on globalHeader"
    },
    {
      "line": 495,
      "value": "#    And I am on \"UserProfilePage\" page"
    },
    {
      "line": 496,
      "value": "#    And I verify the Text on \u0027profile_FirstName\u0027 is \u0027temp_firstname\u0027"
    },
    {
      "line": 497,
      "value": "#    And I verify the Text on \u0027profile_LastName\u0027 is \u0027temp_lastname\u0027"
    },
    {
      "line": 498,
      "value": "#    And I verify the Text on \u0027profile_PhoneNumber1\u0027 is \u0027temp_phonenumber1\u0027"
    },
    {
      "line": 499,
      "value": "#    And I verify the Text on \u0027profile_PhoneNumber2\u0027 is \u0027temp_phonenumber2\u0027"
    },
    {
      "line": 500,
      "value": "#    And I verify the Text on \u0027profile_PhoneNumber3\u0027 is \u0027temp_phonenumber3\u0027"
    },
    {
      "line": 501,
      "value": "#    And I verify the Text on \u0027profile_PhoneExtension\u0027 is \u0027temp_phoneextension\u0027"
    },
    {
      "line": 502,
      "value": "#    And I verify the Text on \u0027profile_EmailAddress\u0027 is \u0027temp_emailaddress\u0027"
    }
  ],
  "line": 510,
  "name": "Catg : Check Availability ; Hit on Check availibity on search results and items details page and check current status",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-check-availability-;-hit-on-check-availibity-on-search-results-and-items-details-page-and-check-current-status",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 504,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 505,
      "name": "@market_smoke1"
    },
    {
      "line": 506,
      "name": "@market_smoke_prod"
    },
    {
      "line": 507,
      "name": "@market_smoke"
    },
    {
      "line": 508,
      "name": "@check_availability"
    },
    {
      "line": 509,
      "name": "@check_availablity_search_idp"
    }
  ]
});
formatter.step({
  "line": 511,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 512,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 513,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 514,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 515,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 516,
  "name": "Verify items list details related to product",
  "keyword": "And "
});
formatter.step({
  "line": 517,
  "name": "I should see the Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 518,
  "name": "I click at Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 519,
  "name": "I should see the Item \u0027availabilitymsg\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 520,
  "name": "I click at Item \u0027itemslabel\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 521,
  "name": "I must be taken to an \u0027ItemDetailsPage\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 522,
  "name": "I should see the Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 523,
  "name": "I click at Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 524,
  "name": "I should see the Item \u0027availabilitymsg\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 525,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 24643997017,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 709947426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:276"
});
formatter.result({
  "duration": 24369337672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 1259052810,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 39386086672,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:422"
});
formatter.result({
  "duration": 5933472209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "checkavailibity",
      "offset": 23
    }
  ],
  "location": "itemdetailspage.groovy:19"
});
formatter.result({
  "duration": 713642111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "checkavailibity",
      "offset": 17
    }
  ],
  "location": "itemdetailspage.groovy:62"
});
formatter.result({
  "duration": 35521751851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "availabilitymsg",
      "offset": 23
    }
  ],
  "location": "itemdetailspage.groovy:19"
});
formatter.result({
  "duration": 974491403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "itemslabel",
      "offset": 17
    }
  ],
  "location": "itemdetailspage.groovy:62"
});
formatter.result({
  "duration": 31777998840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 1180476561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "checkavailibity",
      "offset": 23
    }
  ],
  "location": "itemdetailspage.groovy:19"
});
formatter.result({
  "duration": 1231128739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "checkavailibity",
      "offset": 17
    }
  ],
  "location": "itemdetailspage.groovy:62"
});
formatter.result({
  "duration": 31896043107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "availabilitymsg",
      "offset": 23
    }
  ],
  "location": "itemdetailspage.groovy:19"
});
formatter.result({
  "duration": 1206677469,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 9001314431,
  "status": "passed"
});
formatter.after({
  "duration": 415292,
  "status": "passed"
});
formatter.before({
  "duration": 24907153,
  "status": "passed"
});
formatter.scenario({
  "line": 533,
  "name": "Catg : Search ; Typeahead -Item detail page when hit on item and category landing when hit on category",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-typeahead--item-detail-page-when-hit-on-item-and-category-landing-when-hit-on-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 528,
      "name": "@typeahead_itemdetail"
    },
    {
      "line": 529,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 530,
      "name": "@market_smoke1"
    },
    {
      "line": 531,
      "name": "@market_smoke_prod"
    },
    {
      "line": 532,
      "name": "@market_smoke"
    }
  ]
});
formatter.step({
  "line": 534,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 535,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 536,
  "name": "Enter Text \"glov\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 537,
  "name": "I click \u0027ONCE\u0027 on 1 item from the \u0027TypeaheadProductsList\u0027 in tablet header navigation",
  "keyword": "And "
});
formatter.step({
  "line": 538,
  "name": "I must be taken to an \u0027ItemDetailsPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 539,
  "name": "I am on \"ItemDetailsPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 540,
  "name": "Make sure elements \"TitleInfo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 541,
  "name": "Make sure elements \"Image_container\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 542,
  "name": "Make sure elements \"Details\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 543,
  "name": "Make sure elements \"Description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 544,
  "name": "Make sure elements \"Specification\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 545,
  "name": "Make sure elements \"Packaging\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 546,
  "name": "Make sure elements \"ManufacturerName\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 547,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 24347370303,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2018095947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "glov",
      "offset": 12
    },
    {
      "val": "SearchBox",
      "offset": 37
    },
    {
      "val": "globalHeader",
      "offset": 59
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 18324962840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ONCE",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 18
    },
    {
      "val": "TypeaheadProductsList",
      "offset": 35
    }
  ],
  "location": "categorynavigation.groovy:120"
});
formatter.result({
  "duration": 42917508513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 1108467624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 787672754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TitleInfo",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1967102121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Image_container",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 41
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 2262049239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Details",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 33
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 925728342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 37
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 799721190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Specification",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 39
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1139951287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Packaging",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 3484575671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ManufacturerName",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 2568985325,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 7630256303,
  "status": "passed"
});
formatter.after({
  "duration": 391732,
  "status": "passed"
});
formatter.before({
  "duration": 25468528,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 549,
      "value": "#SE12"
    }
  ],
  "line": 555,
  "name": "Catg : Search ; Typeahead - category landing when hit on category for searched product",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-typeahead---category-landing-when-hit-on-category-for-searched-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 550,
      "name": "@typeahead_categorylanding"
    },
    {
      "line": 551,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 552,
      "name": "@market_smoke1"
    },
    {
      "line": 553,
      "name": "@market_smoke_prod"
    },
    {
      "line": 554,
      "name": "@market_smoke"
    }
  ]
});
formatter.step({
  "line": 556,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 557,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 558,
  "name": "Enter Text \"glov\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 559,
  "name": "I click \u0027ONCE\u0027 on 1 item from the \u0027TypeaheadCategoriesList\u0027 in tablet header navigation",
  "keyword": "And "
});
formatter.step({
  "line": 560,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 561,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 21477344829,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 810878583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "glov",
      "offset": 12
    },
    {
      "val": "SearchBox",
      "offset": 37
    },
    {
      "val": "globalHeader",
      "offset": 59
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 16105634108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ONCE",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 18
    },
    {
      "val": "TypeaheadCategoriesList",
      "offset": 35
    }
  ],
  "location": "categorynavigation.groovy:120"
});
formatter.result({
  "duration": 44781339390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 1115898585,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 7771841707,
  "status": "passed"
});
formatter.after({
  "duration": 418485,
  "status": "passed"
});
formatter.before({
  "duration": 34097752,
  "status": "passed"
});
formatter.scenario({
  "line": 566,
  "name": "Catg : Order Search ; Search orders placed in last few days by filter and searching by PO number",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-order-search-;-search-orders-placed-in-last-few-days-by-filter-and-searching-by-po-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 563,
      "name": "@ordersearch_filter"
    },
    {
      "line": 564,
      "name": "@market_smoke1"
    },
    {
      "line": 565,
      "name": "@market_smoke"
    }
  ]
});
formatter.step({
  "line": 567,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 568,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 569,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 570,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 571,
  "name": "Select the product that is available",
  "keyword": "And "
});
formatter.step({
  "line": 572,
  "name": "Add the product to cart and update the amount to meet minimum requirements",
  "keyword": "And "
});
formatter.step({
  "line": 573,
  "name": "Checkout and get order Number",
  "keyword": "When "
});
formatter.step({
  "line": 574,
  "name": "Get status and ship to details of order and me sure it is \"In Process\"",
  "keyword": "Then "
});
formatter.step({
  "line": 575,
  "name": "Get into details of order and make sure order is correct",
  "keyword": "And "
});
formatter.step({
  "line": 576,
  "name": "Go back to search page from invoice details",
  "keyword": "And "
});
formatter.step({
  "line": 577,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 578,
  "name": "I click element \u0027orderManagement\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 579,
  "name": "I click element \u0027ordersLink\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 580,
  "name": "I am on \"OrderSearchPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 581,
  "name": "I click on \u0027orderSearchAllShiptos\u0027 element",
  "keyword": "And "
});
formatter.step({
  "line": 582,
  "name": "I click on \u0027filterResultsApplyBtn\u0027 element",
  "keyword": "And "
});
formatter.step({
  "line": 583,
  "name": "Make sure elements \"numberOfResultsMessage,searchResultsTable,resultsHeader,orderSearchResults\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 584,
  "name": "Make sure elements \"poNumberHeader,orderNumberHeader,buyerNameHeader,orderMethodHeader,orderTotalHeader,shipToHeader,dateHeader,statusHeader\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 585,
  "name": "Save value of element \"ponumbers\" to variable \"temp_ponumber\"",
  "keyword": "And "
});
formatter.step({
  "line": 586,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 587,
  "name": "I click element \u0027orderManagement\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 588,
  "name": "I click element \u0027ordersLink\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 589,
  "name": "I am on \"OrderSearchPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 590,
  "name": "Select \"PO Number\" from drop down \"Search_Orders\" on page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 591,
  "name": "I Enter Text \"temp_ponumber\" in Text Box field \"searchByNumber\"",
  "keyword": "And "
});
formatter.step({
  "line": 592,
  "name": "I click on \u0027searchButton\u0027 element",
  "keyword": "And "
});
formatter.step({
  "line": 593,
  "name": "I verify the Text on \u0027ponumbers\u0027 is \u0027temp_ponumber\u0027",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 26014666115,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1387062814,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:13"
});
formatter.result({
  "duration": 12875568521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 25766442519,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:294"
});
formatter.result({
  "duration": 64234126140,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:341"
});
formatter.result({
  "duration": 71201308628,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:349"
});
formatter.result({
  "duration": 17721322009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "In Process",
      "offset": 59
    }
  ],
  "location": "shoppingcartpage.groovy:356"
});
formatter.result({
  "duration": 34326762968,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:404"
});
formatter.result({
  "duration": 15959943018,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:409"
});
formatter.result({
  "duration": 9820888241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 832946795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orderManagement",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 6912513896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ordersLink",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 15849022761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OrderSearchPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 746781169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orderSearchAllShiptos",
      "offset": 12
    }
  ],
  "location": "searchresultpage.groovy:468"
});
formatter.result({
  "duration": 3180491289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "filterResultsApplyBtn",
      "offset": 12
    }
  ],
  "location": "searchresultpage.groovy:468"
});
formatter.result({
  "duration": 5509733481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "numberOfResultsMessage,searchResultsTable,resultsHeader,orderSearchResults",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 100
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 3133889363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "poNumberHeader,orderNumberHeader,buyerNameHeader,orderMethodHeader,orderTotalHeader,shipToHeader,dateHeader,statusHeader",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 146
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 8988564885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ponumbers",
      "offset": 23
    },
    {
      "val": "temp_ponumber",
      "offset": 47
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 24215141896,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2147935169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orderManagement",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 8014428756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ordersLink",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 17679174349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OrderSearchPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 755467020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PO Number",
      "offset": 8
    },
    {
      "val": "Search_Orders",
      "offset": 35
    },
    {
      "val": "",
      "offset": 59
    }
  ],
  "location": "common_csp.groovy:470"
});
formatter.result({
  "duration": 6524026355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_ponumber",
      "offset": 14
    },
    {
      "val": "searchByNumber",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "duration": 7607485204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchButton",
      "offset": 12
    }
  ],
  "location": "searchresultpage.groovy:468"
});
formatter.result({
  "duration": 6719315443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ponumbers",
      "offset": 22
    },
    {
      "val": "temp_ponumber",
      "offset": 37
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 128375900007,
  "status": "passed"
});
formatter.after({
  "duration": 536316,
  "status": "passed"
});
formatter.before({
  "duration": 40300477,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 595,
      "value": "#in process"
    }
  ],
  "line": 601,
  "name": "Catg : Barcode ; Verify Barcode option",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-barcode-;-verify-barcode-option",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 596,
      "name": "@barcode"
    },
    {
      "line": 597,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 598,
      "name": "@market_smoke1"
    },
    {
      "line": 599,
      "name": "@market_smoke_prod"
    },
    {
      "line": 600,
      "name": "@market_smoke"
    }
  ]
});
formatter.step({
  "line": 602,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 603,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 604,
  "name": "I click element \u0027quickorder\u0027 on globalHeader",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 28831141530,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 695726695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quickorder",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 5563563055,
  "status": "passed"
});
formatter.after({
  "duration": 532506,
  "status": "passed"
});
formatter.uri("navigation/Common_2.feature");
formatter.feature({
  "line": 1,
  "name": "Market smoke test cases second scenarios",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 27605508,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Catg : Login ; Login with Valid credentials",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-login-;-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 4,
      "name": "@market_smoke2"
    },
    {
      "line": 5,
      "name": "@market_smoke_prod"
    },
    {
      "line": 6,
      "name": "@market_smoke"
    },
    {
      "line": 7,
      "name": "@login"
    },
    {
      "line": 8,
      "name": "@login_valid"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 28119959180,
  "status": "passed"
});
formatter.after({
  "duration": 569540,
  "status": "passed"
});
formatter.before({
  "duration": 37765366,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Catg : Login ; DO NOT Remember logged in username",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-login-;-do-not-remember-logged-in-username",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 13,
      "name": "@market_smoke2"
    },
    {
      "line": 14,
      "name": "@market_smoke_prod"
    },
    {
      "line": 15,
      "name": "@market_smoke"
    },
    {
      "line": 16,
      "name": "@login"
    },
    {
      "line": 17,
      "name": "@login_do_notremember"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page but not logged in",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Element \"username\" value is null",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 24998258907,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 666526368,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 6774323188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:24"
});
formatter.result({
  "duration": 6925990718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "null",
      "offset": 28
    }
  ],
  "location": "common_csp.groovy:434"
});
formatter.result({
  "duration": 3269765877,
  "status": "passed"
});
formatter.after({
  "duration": 418275,
  "status": "passed"
});
formatter.before({
  "duration": 25436741,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Catg : Login ; REMEMBER logged in username",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-login-;-remember-logged-in-username",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 26,
      "name": "@market_smoke2"
    },
    {
      "line": 27,
      "name": "@market_smoke"
    },
    {
      "line": 28,
      "name": "@market_smoke_prod"
    },
    {
      "line": 29,
      "name": "@login"
    },
    {
      "line": 30,
      "name": "@login_remember"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with remember me option",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page but not logged in",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Element \"username\" value is not null",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I click on \u0027remember\u0027 in Tablet Header",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:29"
});
formatter.result({
  "duration": 28002194810,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 679406273,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 6844157729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:24"
});
formatter.result({
  "duration": 6688826431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "not null",
      "offset": 28
    }
  ],
  "location": "common_csp.groovy:434"
});
formatter.result({
  "duration": 6437028994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "remember",
      "offset": 12
    }
  ],
  "location": "basepage.groovy:104"
});
formatter.result({
  "duration": 8963278976,
  "status": "passed"
});
formatter.after({
  "duration": 426912,
  "status": "passed"
});
formatter.before({
  "duration": 25207181,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Catg : My Account ; Log Out successfully",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-my-account-;-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 40,
      "name": "@market_smoke2"
    },
    {
      "line": 41,
      "name": "@market_smoke"
    },
    {
      "line": 42,
      "name": "@market_smoke_prod"
    },
    {
      "line": 43,
      "name": "@My_Account"
    },
    {
      "line": 44,
      "name": "@logout"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "Log out of Market application",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I am on \"LoginPage\" page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 21635477115,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 8525358113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 3069378708,
  "status": "passed"
});
formatter.after({
  "duration": 345574,
  "status": "passed"
});
formatter.before({
  "duration": 25514710,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 50,
      "value": "#    not in list"
    }
  ],
  "line": 57,
  "name": "Catg : Login ; Mega Menus (Products,Order management ,quick order , resources and my account) links verification",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-login-;-mega-menus-(products,order-management-,quick-order-,-resources-and-my-account)-links-verification",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 51,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 52,
      "name": "@market_smoke2"
    },
    {
      "line": 53,
      "name": "@market_smoke"
    },
    {
      "line": 54,
      "name": "@market_smoke_prod"
    },
    {
      "line": 55,
      "name": "@login"
    },
    {
      "line": 56,
      "name": "@mega_menu"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I should see the \u0027products\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "I should see the \u0027orderManagement\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I should see the \u0027quickorder\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I should see the \u0027resources\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I should see the \u0027MyAccount\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 23394992410,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 825654117,
  "error_message": "geb.error.RequiredPageContentNotPresent: The required page content \u0027pages.BasePage -\u003e globalHeader: modules.header.GlobalHeader -\u003e headerId: geb.navigator.EmptyNavigator\u0027 is not present\n\tat geb.content.TemplateDerivedPageContent.require(TemplateDerivedPageContent.groovy:62)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:63)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:106)\n\tat geb.Module.getProperty(Module.groovy)\n\tat geb.content.TemplateDerivedPageContent.propertyMissing(TemplateDerivedPageContent.groovy:90)\n\tat geb.content.TemplateDerivedPageContent.getProperty(TemplateDerivedPageContent.groovy)\n\tat steps.basepage.basepage$_run_closure1.doCall(basepage.groovy:14)\n\tat ✽.And I am on the Header(navigation/Common_2.feature:59)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "products",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "orderManagement",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "quickorder",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "resources",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MyAccount",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1123429891,
  "status": "passed"
});
formatter.before({
  "duration": 58011044,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Catg : Login ; Search bar, Navigation bar , sold to ship to ,logo and change account verification",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-login-;-search-bar,-navigation-bar-,-sold-to-ship-to-,logo-and-change-account-verification",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 67,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 68,
      "name": "@market_smoke2"
    },
    {
      "line": 69,
      "name": "@market_smoke"
    },
    {
      "line": 70,
      "name": "@market_smoke_prod"
    },
    {
      "line": 71,
      "name": "@login"
    },
    {
      "line": 72,
      "name": "@login_market"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I should see the \u0027Sold-To/Ship-To\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "I should see the \u0027ChangeAccount\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I should see the \u0027Logo\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I should see the \u0027SearchBar\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I should see the \u0027NavigationBar\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I should see the \u0027ShoppingCartShortcut\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 18827083168,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1004602786,
  "error_message": "geb.error.RequiredPageContentNotPresent: The required page content \u0027pages.BasePage -\u003e globalHeader: modules.header.GlobalHeader -\u003e headerId: geb.navigator.EmptyNavigator\u0027 is not present\n\tat geb.content.TemplateDerivedPageContent.require(TemplateDerivedPageContent.groovy:62)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:63)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:82)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Module.propertyMissing(Module.groovy:106)\n\tat geb.Module.getProperty(Module.groovy)\n\tat geb.content.TemplateDerivedPageContent.propertyMissing(TemplateDerivedPageContent.groovy:90)\n\tat geb.content.TemplateDerivedPageContent.getProperty(TemplateDerivedPageContent.groovy)\n\tat steps.basepage.basepage$_run_closure1.doCall(basepage.groovy:14)\n\tat ✽.And I am on the Header(navigation/Common_2.feature:75)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sold-To/Ship-To",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ChangeAccount",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Logo",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchBar",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NavigationBar",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ShoppingCartShortcut",
      "offset": 18
    }
  ],
  "location": "basepage.groovy:34"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 709682904,
  "status": "passed"
});
formatter.before({
  "duration": 27746165,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "Catg : Shopping Cart ; Search and buy available product and get order number",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-search-and-buy-available-product-and-get-order-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 84,
      "name": "@market_smoke2"
    },
    {
      "line": 85,
      "name": "@market_smoke"
    },
    {
      "line": 86,
      "name": "@shopping"
    },
    {
      "line": 87,
      "name": "@buyproduct"
    }
  ]
});
formatter.step({
  "line": 89,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "Select the product that is available",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Add the product to cart and update the amount to meet minimum requirements",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "Checkout and get order Number",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 21762389609,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 717374179,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:13"
});
formatter.result({
  "duration": 12930707018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 36672708503,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:294"
});
formatter.result({
  "duration": 68715521894,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:341"
});
formatter.result({
  "duration": 75409424095,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:349"
});
formatter.result({
  "duration": 14147007575,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 9969326200,
  "status": "passed"
});
formatter.after({
  "duration": 669958,
  "status": "passed"
});
formatter.before({
  "duration": 25624303,
  "status": "passed"
});
formatter.scenario({
  "line": 102,
  "name": "Catg : Shopping Cart ; Once order number gets generated verify its status and order details",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-once-order-number-gets-generated-verify-its-status-and-order-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 98,
      "name": "@market_smoke2"
    },
    {
      "line": 99,
      "name": "@market_smoke"
    },
    {
      "line": 100,
      "name": "@shopping"
    },
    {
      "line": 101,
      "name": "@buyproduct"
    }
  ]
});
formatter.step({
  "line": 103,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "Get status and ship to details of order and me sure it is \"In Process\"",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "Get into details of order and make sure order is correct",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "Go back to search page from invoice details",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 22379216832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "In Process",
      "offset": 59
    }
  ],
  "location": "shoppingcartpage.groovy:356"
});
formatter.result({
  "duration": 29360149253,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:404"
});
formatter.result({
  "duration": 17466946179,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:409"
});
formatter.result({
  "duration": 4857409871,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 12084240245,
  "status": "passed"
});
formatter.after({
  "duration": 446545,
  "status": "passed"
});
formatter.before({
  "duration": 27766255,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "Catg : Shopping Cart ; Add items to shopping cart and verify Items details (product_name,product_num etc) before adding to cart",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-add-items-to-shopping-cart-and-verify-items-details-(product-name,product-num-etc)-before-adding-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 109,
      "name": "@market_smoke2"
    },
    {
      "line": 110,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 111,
      "name": "@market_smoke"
    },
    {
      "line": 112,
      "name": "@market_smoke_prod"
    },
    {
      "line": 113,
      "name": "@shopping"
    },
    {
      "line": 114,
      "name": "@view_items_in_cart"
    }
  ]
});
formatter.step({
  "line": 116,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 117,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "Select the product that is available",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 21881283543,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 714309808,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:13"
});
formatter.result({
  "duration": 10982598974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 26802515999,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:294"
});
formatter.result({
  "duration": 64084293172,
  "status": "passed"
});
formatter.after({
  "duration": 532366,
  "status": "passed"
});
formatter.before({
  "duration": 26084511,
  "status": "passed"
});
formatter.scenario({
  "line": 128,
  "name": "Catg : Shopping Cart ; Add items to shopping cart and verify item count after addition",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-add-items-to-shopping-cart-and-verify-item-count-after-addition",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 122,
      "name": "@market_smoke2"
    },
    {
      "line": 123,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 124,
      "name": "@market_smoke"
    },
    {
      "line": 125,
      "name": "@market_smoke_prod"
    },
    {
      "line": 126,
      "name": "@shopping"
    },
    {
      "line": 127,
      "name": "@add_tems_to_cart"
    }
  ]
});
formatter.step({
  "line": 129,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 130,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "When "
});
formatter.step({
  "line": 133,
  "name": "Select the product that is available",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I verify the Text on \u0027itemsaddedtocart\u0027 is \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I verify the Text on \u0027HeaderCartItemCount\u0027 is \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "Search product by word \"laboratory\" and get list of related products",
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "Select the product that is available",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "I verify the Text on \u0027itemsaddedtocart\u0027 is \u00271\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "I verify the Text on \u0027HeaderCartItemCount\u0027 is \u00272\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 22781851878,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 780439163,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:13"
});
formatter.result({
  "duration": 63961428194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 22845204023,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:294"
});
formatter.result({
  "duration": 63702670745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 464131424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "itemsaddedtocart",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 5796715784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeaderCartItemCount",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 5453207732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "laboratory",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 26817767306,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:294"
});
formatter.result({
  "duration": 62087926189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 477596292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "itemsaddedtocart",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 4520188265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeaderCartItemCount",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 7392211215,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 9330429734,
  "status": "passed"
});
formatter.after({
  "duration": 430478,
  "status": "passed"
});
formatter.before({
  "duration": 26161964,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 144,
      "value": "#  New requirement"
    },
    {
      "line": 145,
      "value": "#    User is able to see the Barcode Printing icon and text (disabled)"
    },
    {
      "line": 146,
      "value": "# remaining : add amount from each item and see total matching"
    }
  ],
  "line": 153,
  "name": "Catg : Shopping Cart ; Add items to shopping cart and verify details in cart",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-add-items-to-shopping-cart-and-verify-details-in-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 147,
      "name": "@market_smoke2"
    },
    {
      "line": 148,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 149,
      "name": "@market_smoke"
    },
    {
      "line": 150,
      "name": "@market_smoke_prod"
    },
    {
      "line": 151,
      "name": "@shopping"
    },
    {
      "line": 152,
      "name": "@cart_items_verification"
    }
  ]
});
formatter.step({
  "line": 154,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 155,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "When "
});
formatter.step({
  "line": 158,
  "name": "Select the product that is available",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "Search product by word \"laboratory\" and get list of related products",
  "keyword": "When "
});
formatter.step({
  "line": 161,
  "name": "Select the product that is available",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "I verify the Text on \u0027itemsaddedtocart\u0027 is \u00271\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 164,
  "name": "I verify the Text on \u0027HeaderCartItemCount\u0027 is \u00272\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "I click element \u0027cartItemIcon\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "I am on \"ShoppingCartPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "Make sure elements \"cartsummary,CartSummaryItemCount,CartSummaryItemTotal,checkoutButton,PO,POlabel,poNumberField,pohelptext,POMemolabel,poMemoField,department,PackingSliplabel,packingSlipField\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 168,
  "name": "Make sure elements \"printericon,selectAll,delete,update,all_items,each_item\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "Make sure elements \"each_item_check,each_item_image,each_item_title,each_item_material,each_item_manufacturer,each_item_availibity,each_item_qtylabel,each_item_quantity,each_item_price\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "I verify the \"class\" attribute of \u0027delete\u0027 is \u0027delete-link cta-link primary disabled\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "I verify the \"class\" attribute of \u0027update\u0027 is \u0027cta-btn primary disabled\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 19649524481,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 792921148,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:13"
});
formatter.result({
  "duration": 63620447863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 24786917871,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:294"
});
formatter.result({
  "duration": 58729151538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 387061772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "laboratory",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 24367405708,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:294"
});
formatter.result({
  "duration": 57624088029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 437687018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "itemsaddedtocart",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 6996138754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeaderCartItemCount",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 4517536558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cartItemIcon",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 40553249768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShoppingCartPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 716968220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cartsummary,CartSummaryItemCount,CartSummaryItemTotal,checkoutButton,PO,POlabel,poNumberField,pohelptext,POMemolabel,poMemoField,department,PackingSliplabel,packingSlipField",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 199
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 13957540101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "printericon,selectAll,delete,update,all_items,each_item",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 81
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 6189384768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "each_item_check,each_item_image,each_item_title,each_item_material,each_item_manufacturer,each_item_availibity,each_item_qtylabel,each_item_quantity,each_item_price",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 190
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 8822280584,
  "error_message": "java.lang.AssertionError: each_item_availibity not present on page pages.ShoppingCartPage. Expression: false\n\tat steps.common_csp.common_csp$_run_closure26$_closure92.doCall(common_csp.groovy:319)\n\tat ✽.And Make sure elements \"each_item_check,each_item_image,each_item_title,each_item_material,each_item_manufacturer,each_item_availibity,each_item_qtylabel,each_item_quantity,each_item_price\" are present(navigation/Common_2.feature:169)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "class",
      "offset": 14
    },
    {
      "val": "delete",
      "offset": 35
    },
    {
      "val": "delete-link cta-link primary disabled",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:486"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "class",
      "offset": 14
    },
    {
      "val": "update",
      "offset": 35
    },
    {
      "val": "cta-btn primary disabled",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:486"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 884770316,
  "status": "passed"
});
formatter.before({
  "duration": 27109765,
  "status": "passed"
});
formatter.scenario({
  "line": 181,
  "name": "Catg : Shopping Cart ; View shopping cart Details",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-view-shopping-cart-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 175,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 176,
      "name": "@market_smoke2"
    },
    {
      "line": 177,
      "name": "@market_smoke"
    },
    {
      "line": 178,
      "name": "@market_smoke_prod"
    },
    {
      "line": 179,
      "name": "@shopping"
    },
    {
      "line": 180,
      "name": "@view_cart_details"
    }
  ]
});
formatter.step({
  "line": 182,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 183,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "When "
});
formatter.step({
  "line": 185,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 25971504375,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 717338208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 22168368613,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 7753866184,
  "status": "passed"
});
formatter.after({
  "duration": 570632,
  "status": "passed"
});
formatter.before({
  "duration": 29273542,
  "status": "passed"
});
formatter.scenario({
  "line": 193,
  "name": "Catg : Search ; Basic Search by material number verification to verify if search is returning results or not",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-search-;-basic-search-by-material-number-verification-to-verify-if-search-is-returning-results-or-not",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 187,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 188,
      "name": "@market_smoke2"
    },
    {
      "line": 189,
      "name": "@market_smoke"
    },
    {
      "line": 190,
      "name": "@market_smoke_prod"
    },
    {
      "line": 191,
      "name": "@search"
    },
    {
      "line": 192,
      "name": "@search_test"
    }
  ]
});
formatter.step({
  "line": 194,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 195,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "The search results page displays",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "Make sure elements \"ResultForm\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 20557540165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 35102665390,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:51"
});
formatter.result({
  "duration": 270341735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ResultForm",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 36
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1970300479,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 12950971349,
  "status": "passed"
});
formatter.after({
  "duration": 469726,
  "status": "passed"
});
formatter.before({
  "duration": 22280082,
  "status": "passed"
});
formatter.scenario({
  "line": 206,
  "name": "Catg : Search ; Search with alphanumeric words and make sure 0 results are returned",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-search-;-search-with-alphanumeric-words-and-make-sure-0-results-are-returned",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 200,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 201,
      "name": "@market_smoke2"
    },
    {
      "line": 202,
      "name": "@market_smoke"
    },
    {
      "line": 203,
      "name": "@market_smoke_prod"
    },
    {
      "line": 204,
      "name": "@search"
    },
    {
      "line": 205,
      "name": "@search_no_results"
    }
  ]
});
formatter.step({
  "line": 207,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 208,
  "name": "Search product by word \"dsfsdfsdf342344\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "I verify the Text on \u0027ResultCountNumber\u0027 is \u00270\u0027",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 22066971681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dsfsdfsdf342344",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 16763706709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 445682032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ResultCountNumber",
      "offset": 22
    },
    {
      "val": "0",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 120375461698,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 120.0 seconds (failed with exception)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:138)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.DefaultWaitingSupport.doWaitFor(DefaultWaitingSupport.groovy:51)\n\tat geb.waiting.DefaultWaitingSupport.waitFor(DefaultWaitingSupport.groovy:46)\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\n\tat geb.Page.waitFor(Page.groovy:516)\n\tat geb.Page.waitFor(Page.groovy)\n\tat geb.Browser.methodMissing(Browser.groovy:206)\n\tat geb.binding.BindingUpdater$InvocationForwarding.doCall(BindingUpdater.groovy:73)\n\tat steps.common_csp.common_csp$_run_closure37.doCall(common_csp.groovy:399)\n\tat ✽.And I verify the Text on \u0027ResultCountNumber\u0027 is \u00270\u0027(navigation/Common_2.feature:210)\nCaused by: groovy.lang.MissingPropertyException: Unable to resolve ResultCountNumber as content for pages.SearchResultPage, or as a property on its Navigator context. Is ResultCountNumber a class you forgot to import?\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:45)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Page.propertyMissing(Page.groovy:99)\n\tat geb.Page.getProperty(Page.groovy)\n\tat steps.common_csp.common_csp$_run_closure37$_closure98.doCall(common_csp.groovy:399)\n\tat steps.common_csp.common_csp$_run_closure37$_closure98.doCall(common_csp.groovy)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:127)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.waiting.DefaultWaitingSupport.doWaitFor(DefaultWaitingSupport.groovy:51)\n\tat geb.waiting.DefaultWaitingSupport.waitFor(DefaultWaitingSupport.groovy:46)\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\n\tat geb.waiting.WaitingSupport$waitFor.call(Unknown Source)\n\tat geb.Page.waitFor(Page.groovy:516)\n\tat geb.Page.waitFor(Page.groovy)\n\tat geb.Browser.methodMissing(Browser.groovy:206)\n\tat geb.binding.BindingUpdater$InvocationForwarding.doCall(BindingUpdater.groovy:73)\n\tat steps.common_csp.common_csp$_run_closure37.doCall(common_csp.groovy:399)\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:155)\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:71)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:68)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.runtime.Runtime.run(Runtime.java:121)\n\tat cucumber.runtime.Runtime$run.call(Unknown Source)\n\tat com.cardinalhealth.market.config.CucumberRunner.run(CucumberRunner.groovy:29)\n\tat com.cardinalhealth.market.config.CucumberRunner$run$0.callStatic(Unknown Source)\n\tat com.cardinalhealth.market.config.CucumberRunner.runCucumber(CucumberRunner.groovy:19)\n\tat com.cardinalhealth.market.config.CucumberRunner$runCucumber.call(Unknown Source)\n\tat com.cardinalhealth.market.TestRunner.main(TestRunner.groovy:31)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 579914367,
  "status": "passed"
});
formatter.before({
  "duration": 22393614,
  "status": "passed"
});
formatter.scenario({
  "line": 218,
  "name": "Catg : Search ; Verify details of each item returned",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-search-;-verify-details-of-each-item-returned",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 212,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 213,
      "name": "@market_smoke2"
    },
    {
      "line": 214,
      "name": "@market_smoke"
    },
    {
      "line": 215,
      "name": "@market_smoke_prod"
    },
    {
      "line": 216,
      "name": "@search"
    },
    {
      "line": 217,
      "name": "@results_each_item_details"
    }
  ]
});
formatter.step({
  "line": 219,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 220,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 221,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "I must see the \u0027ProductTitle\u0027 attribute displayed for each item",
  "keyword": "Then "
});
formatter.step({
  "line": 223,
  "name": "I must see the \u0027MaterialNum\u0027 attribute displayed for each item",
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "I must see the \u0027ManufacturerNum\u0027 attribute displayed for each item",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "I must see the \u0027CheckAvailibity\u0027 attribute displayed for each item",
  "keyword": "Then "
});
formatter.step({
  "line": 226,
  "name": "I must see the \u0027QtyValueBoxText\u0027 attribute displayed for each item",
  "keyword": "Then "
});
formatter.step({
  "line": 227,
  "name": "I must see the \u0027QtyTitle\u0027 attribute displayed for each item",
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "I must see the \u0027ManufacturerName\u0027 attribute displayed for each item",
  "keyword": "Then "
});
formatter.step({
  "line": 229,
  "name": "I must see the \u0027itemImage\u0027 attribute displayed for each item",
  "keyword": "Then "
});
formatter.step({
  "line": 230,
  "name": "I must see the \u0027UOMSelections\u0027 attribute displayed for each item",
  "keyword": "Then "
});
formatter.step({
  "line": 231,
  "name": "I must see the \u0027CompareCheckbox\u0027 attribute displayed for each item",
  "keyword": "Then "
});
formatter.step({
  "line": 232,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 26981724961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 23918592865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 440061087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ProductTitle",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 9614247334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MaterialNum",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 10209394540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ManufacturerNum",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 9672089586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CheckAvailibity",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 12856143187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QtyValueBoxText",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 11302113925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QtyTitle",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 18106312566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ManufacturerName",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 9860278041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "itemImage",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 11801796697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UOMSelections",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 9933889228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareCheckbox",
      "offset": 16
    }
  ],
  "location": "searchresultpage.groovy:57"
});
formatter.result({
  "duration": 10293742501,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 10353251088,
  "status": "passed"
});
formatter.after({
  "duration": 379359,
  "status": "passed"
});
formatter.before({
  "duration": 25453783,
  "status": "passed"
});
formatter.scenario({
  "line": 239,
  "name": "Catg : Search ; Item details default attributes",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-search-;-item-details-default-attributes",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 235,
      "name": "@market_smoke2"
    },
    {
      "line": 236,
      "name": "@market_smoke"
    },
    {
      "line": 237,
      "name": "@search"
    },
    {
      "line": 238,
      "name": "@item_details_default"
    }
  ]
});
formatter.step({
  "line": 240,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 241,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 245,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "Save whole part of element \"manufacturer\" to variable \"temp_manufacturernum\"",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "Save value of element \"material\" to variable \"temp_materialnum\"",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "Enter Text \"temp_manufacturernum\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "I click element \u0027SearchBarSubmit\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "if \"SearchResultPage\" page returned than hit on item that contains \"temp_materialnum\" and \"temp_manufacturernum\" and get to idp page",
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "I am on \"ItemDetailsPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "Make sure elements \"Logo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 254,
  "name": "Make sure elements \"SearchBox\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 255,
  "name": "Make sure elements \"SearchBarSubmit\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 256,
  "name": "Make sure elements \"SoldToNum\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 257,
  "name": "Make sure elements \"SoldToName\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 258,
  "name": "Make sure elements \"ShipToNum\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 259,
  "name": "Make sure elements \"ShipToName\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 260,
  "name": "Make sure elements \"changeAccountLink\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 261,
  "name": "Make sure elements \"PrintBtn\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 262,
  "name": "I verify the Text on \u0027manufacturernum\u0027 is \u0027temp_manufacturernum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "Make sure elements \"TitleInfo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 264,
  "name": "Make sure elements \"Image_container\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "Make sure elements \"Details\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 266,
  "name": "Make sure elements \"Description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "Make sure elements \"Specification\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "Make sure elements \"Packaging\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "Make sure elements \"ManufacturerName\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 24401862800,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2559930367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:276"
});
formatter.result({
  "duration": 26711162986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 847745565,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 58259028273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:336"
});
formatter.result({
  "duration": 828050175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "whole",
      "offset": 5
    },
    {
      "val": "manufacturer",
      "offset": 28
    },
    {
      "val": "temp_manufacturernum",
      "offset": 55
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 2582633354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "material",
      "offset": 23
    },
    {
      "val": "temp_materialnum",
      "offset": 46
    }
  ],
  "location": "changeaccountsubmit.groovy:80"
});
formatter.result({
  "duration": 4502273338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 765005562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_manufacturernum",
      "offset": 12
    },
    {
      "val": "SearchBox",
      "offset": 53
    },
    {
      "val": "globalHeader",
      "offset": 75
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 13438345943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchBarSubmit",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 40905034830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 4
    },
    {
      "val": "temp_materialnum",
      "offset": 68
    },
    {
      "val": "temp_manufacturernum",
      "offset": 91
    }
  ],
  "location": "common_csp.groovy:445"
});
formatter.result({
  "duration": 159826012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 675272552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logo",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 30
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1547958825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchBox",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 3054936289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchBarSubmit",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 41
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1777980360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToNum",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 2590556813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToName",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 36
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 2237797322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToNum",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 2911016229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToName",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 36
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 3264844604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "changeAccountLink",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 43
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1408530216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PrintBtn",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 34
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 3473633160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacturernum",
      "offset": 22
    },
    {
      "val": "temp_manufacturernum",
      "offset": 43
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 36925276535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TitleInfo",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1095979067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Image_container",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 41
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 756532723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Details",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 33
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 775813206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 37
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 852202387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Specification",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 39
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 696663421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Packaging",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 35
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 704036045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ManufacturerName",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 2204540798,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 7277615334,
  "status": "passed"
});
formatter.after({
  "duration": 522988,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 313,
      "value": "#---------------------------------------------------------------------------------------------------------------------------------------------------------"
    }
  ],
  "line": 320,
  "name": "Catg : Global Header/Navigation ; Click/Tap Change Account - use view all accounts option",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---use-view-all-accounts-option",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 314,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 315,
      "name": "@market_smoke3"
    },
    {
      "line": 316,
      "name": "@market_smoke"
    },
    {
      "line": 317,
      "name": "@market_smoke_prod"
    },
    {
      "line": 318,
      "name": "@global_header"
    },
    {
      "line": 319,
      "name": "@all_account_view"
    }
  ]
});
formatter.step({
  "line": 321,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 322,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 323,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 324,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 325,
  "name": "the system must display an account selection section on the page as \u003cselectAccountLabel\u003e,\u003csoldToLabel\u003e,\u003cshipToLabel\u003e,\u003csearchBoxDefaultText\u003e,\u003cviewAllAccountsLink\u003e,\u003ccancelLink\u003e,\u003cchangeAccountButtonLabel\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 326,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 327,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 328,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.examples({
  "line": 330,
  "name": "",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---use-view-all-accounts-option;",
  "rows": [
    {
      "cells": [
        "selectAccountLabel",
        "soldToLabel",
        "shipToLabel",
        "searchBoxDefaultText",
        "viewAllAccountsLink",
        "cancelLink",
        "changeAccountButtonLabel"
      ],
      "line": 331,
      "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---use-view-all-accounts-option;;1"
    },
    {
      "cells": [
        "Select Account",
        "Sold To",
        "Ship To",
        "Search Sold To\u0027s or Ship To\u0027s",
        "View All Accounts",
        "Cancel",
        "Change Account"
      ],
      "line": 332,
      "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---use-view-all-accounts-option;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 37952893,
  "status": "passed"
});
formatter.scenario({
  "line": 332,
  "name": "Catg : Global Header/Navigation ; Click/Tap Change Account - use view all accounts option",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---use-view-all-accounts-option;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 316,
      "name": "@market_smoke"
    },
    {
      "line": 317,
      "name": "@market_smoke_prod"
    },
    {
      "line": 315,
      "name": "@market_smoke3"
    },
    {
      "line": 319,
      "name": "@all_account_view"
    },
    {
      "line": 314,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 318,
      "name": "@global_header"
    }
  ]
});
formatter.step({
  "line": 321,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 322,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 323,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 324,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 325,
  "name": "the system must display an account selection section on the page as Select Account,Sold To,Ship To,Search Sold To\u0027s or Ship To\u0027s,View All Accounts,Cancel,Change Account",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 326,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 327,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 328,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 24573745662,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 6300908456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 1132139134,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 10282630198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select Account",
      "offset": 68
    },
    {
      "val": "Sold To",
      "offset": 83
    },
    {
      "val": "Ship To",
      "offset": 91
    },
    {
      "val": "Search Sold To\u0027s or Ship To\u0027s",
      "offset": 99
    },
    {
      "val": "View All Accounts",
      "offset": 129
    },
    {
      "val": "Cancel",
      "offset": 147
    },
    {
      "val": "Change Account",
      "offset": 154
    }
  ],
  "location": "changeaccountdropdown.groovy:40"
});
formatter.result({
  "duration": 9366295616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewAllAccounts",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 8979448838,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 731452130,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 6519283479,
  "status": "passed"
});
formatter.after({
  "duration": 430955,
  "status": "passed"
});
formatter.before({
  "duration": 23323444,
  "status": "passed"
});
formatter.scenario({
  "line": 341,
  "name": "Catg : Global Header/Navigation ; Get Products details and verify Product landing and Category Landing Page",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-get-products-details-and-verify-product-landing-and-category-landing-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 334,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 335,
      "name": "@market_smoke3"
    },
    {
      "line": 336,
      "name": "@market_smoke"
    },
    {
      "line": 337,
      "name": "@market_smoke_prod"
    },
    {
      "line": 338,
      "name": "@global_header"
    },
    {
      "line": 339,
      "name": "@getpoductdetails"
    },
    {
      "line": 340,
      "name": "@products_plp_clp"
    }
  ]
});
formatter.step({
  "line": 342,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 343,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 344,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 345,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 346,
  "name": "There should be image and title attribute displayed for each item",
  "keyword": "And "
});
formatter.step({
  "line": 347,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 348,
  "name": "Verify items list details related to product",
  "keyword": "And "
});
formatter.step({
  "line": 349,
  "name": "I should see the Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 350,
  "name": "I click at Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "I should see the Item \u0027availabilitymsg\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 352,
  "name": "I click at Item \u0027itemslabel\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "I must be taken to an \u0027ItemDetailsPage\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 354,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 25308351941,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 760424989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:276"
});
formatter.result({
  "duration": 24093978738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 883592136,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:58"
});
formatter.result({
  "duration": 9912512264,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 49187143534,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:422"
});
formatter.result({
  "duration": 5636731249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "checkavailibity",
      "offset": 23
    }
  ],
  "location": "itemdetailspage.groovy:19"
});
formatter.result({
  "duration": 819856445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "checkavailibity",
      "offset": 17
    }
  ],
  "location": "itemdetailspage.groovy:62"
});
formatter.result({
  "duration": 31332272331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "availabilitymsg",
      "offset": 23
    }
  ],
  "location": "itemdetailspage.groovy:19"
});
formatter.result({
  "duration": 1173433047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "itemslabel",
      "offset": 17
    }
  ],
  "location": "itemdetailspage.groovy:62"
});
formatter.result({
  "duration": 32288143899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 1758263956,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 6966968530,
  "status": "passed"
});
formatter.after({
  "duration": 459503,
  "status": "passed"
});
formatter.before({
  "duration": 25677251,
  "status": "passed"
});
formatter.scenario({
  "line": 362,
  "name": "Catg : Global Header/Navigation ; Click/Tap Change Account - CHANGE account to new ship and sold to account",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---change-account-to-new-ship-and-sold-to-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 356,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 357,
      "name": "@market_smoke3"
    },
    {
      "line": 358,
      "name": "@market_smoke"
    },
    {
      "line": 359,
      "name": "@market_smoke_prod"
    },
    {
      "line": 360,
      "name": "@global_header"
    },
    {
      "line": 361,
      "name": "@account_change"
    }
  ]
});
formatter.step({
  "line": 363,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 364,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 365,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 366,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 367,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 368,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 369,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 370,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 371,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 372,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 373,
  "name": "I verify that \u0027SoldToNum\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 374,
  "name": "I verify that \u0027ShipToNum\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 375,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 25681004510,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 7947888722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 3703069814,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 11579248073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewAllAccounts",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 11046726596,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 2287605613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowSoldToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newsoldto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 4465785898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowShipToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newshipto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 3247995812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountslistnonselectedrow",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 59
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 10310771516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "changeButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 22698714326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToNum",
      "offset": 15
    },
    {
      "val": "temp_newsoldto",
      "offset": 42
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 20008900002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToNum",
      "offset": 15
    },
    {
      "val": "temp_newshipto",
      "offset": 42
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 13556999531,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 7550000562,
  "status": "passed"
});
formatter.after({
  "duration": 602812,
  "status": "passed"
});
formatter.before({
  "duration": 42593757,
  "status": "passed"
});
formatter.scenario({
  "line": 383,
  "name": "Catg : Global Header/Navigation ; Search by sold to account and make sure search results rows contains that number",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-search-by-sold-to-account-and-make-sure-search-results-rows-contains-that-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 377,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 378,
      "name": "@market_smoke3"
    },
    {
      "line": 379,
      "name": "@market_smoke"
    },
    {
      "line": 380,
      "name": "@market_smoke_prod"
    },
    {
      "line": 381,
      "name": "@global_header"
    },
    {
      "line": 382,
      "name": "@searchby_soldto_verifyreturned_changeACCOUNT"
    }
  ]
});
formatter.step({
  "line": 384,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 385,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 386,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 387,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 388,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 389,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 392,
  "name": "I click on element \"cancelButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 393,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 394,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 395,
  "name": "Enter Text \"temp_newsoldto\" in Text Box field \"search\" in module \"changeAccountDropDown\"",
  "keyword": "And "
});
formatter.step({
  "line": 396,
  "name": "I click on element \"searchButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 397,
  "name": "Make sure the search results contains the account \"number\" that is being searched for",
  "keyword": "And "
});
formatter.step({
  "line": 399,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 400,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 401,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 402,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 403,
  "name": "I verify that \u0027SoldToNum\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 404,
  "name": "I verify that \u0027ShipToNum\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 405,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 26557490834,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 6434837789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 3357194212,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 16594741770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewAllAccounts",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 9664068402,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 930541822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowSoldToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newsoldto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 5596530510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowShipToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newshipto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 2788745342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancelButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 6642600071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 1122546851,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 11105101656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_newsoldto",
      "offset": 12
    },
    {
      "val": "search",
      "offset": 47
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 10575435230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 11088405862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "number",
      "offset": 51
    }
  ],
  "location": "changeaccountdropdown.groovy:257"
});
formatter.result({
  "duration": 179435264451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowSoldToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newsoldto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 6813068552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowShipToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newshipto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 5436176412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountslistnonselectedrow",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 59
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 10749804314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "changeButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 20505977647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToNum",
      "offset": 15
    },
    {
      "val": "temp_newsoldto",
      "offset": 42
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 19953478489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToNum",
      "offset": 15
    },
    {
      "val": "temp_newshipto",
      "offset": 42
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 21423487285,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 9616596631,
  "status": "passed"
});
formatter.after({
  "duration": 456273,
  "status": "passed"
});
formatter.before({
  "duration": 40313678,
  "status": "passed"
});
formatter.scenario({
  "line": 413,
  "name": "Catg : Global Header/Navigation ; Search by sold to NAME and make sure search results rows contains that name",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-search-by-sold-to-name-and-make-sure-search-results-rows-contains-that-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 407,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 408,
      "name": "@market_smoke3"
    },
    {
      "line": 409,
      "name": "@market_smoke"
    },
    {
      "line": 410,
      "name": "@market_smoke_prod"
    },
    {
      "line": 411,
      "name": "@global_header"
    },
    {
      "line": 412,
      "name": "@searchby_soldto_verifyreturned_changeNAME"
    }
  ]
});
formatter.step({
  "line": 414,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 415,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 416,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 417,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 418,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 419,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 420,
  "name": "Save value of element \"firstnonselectedrowSoldToName\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 421,
  "name": "Save value of element \"firstnonselectedrowShipToName\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 422,
  "name": "I click on element \"cancelButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 423,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 424,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 425,
  "name": "Enter Text \"temp_newsoldto\" in Text Box field \"search\" in module \"changeAccountDropDown\"",
  "keyword": "And "
});
formatter.step({
  "line": 426,
  "name": "I click on element \"searchButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 427,
  "name": "Make sure the search results contains the account \"name\" that is being searched for",
  "keyword": "And "
});
formatter.step({
  "line": 429,
  "name": "Save value of element \"firstnonselectedrowSoldToName\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 430,
  "name": "Save value of element \"firstnonselectedrowShipToName\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 431,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 432,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 434,
  "name": "I verify that \u0027SoldToName\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 435,
  "name": "I verify that \u0027ShipToName\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 436,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 28187363886,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 5507788286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 3963417966,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 13107353304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewAllAccounts",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 10519870037,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 1627983387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowSoldToName",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 65
    },
    {
      "val": "temp_newsoldto",
      "offset": 101
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 28205335054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowShipToName",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 65
    },
    {
      "val": "temp_newshipto",
      "offset": 101
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 16394806354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancelButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 5661136198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 1308664297,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 13192770456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_newsoldto",
      "offset": 12
    },
    {
      "val": "search",
      "offset": 47
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 11774533130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 12806044759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 51
    }
  ],
  "location": "changeaccountdropdown.groovy:257"
});
formatter.result({
  "duration": 166513506067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowSoldToName",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 65
    },
    {
      "val": "temp_newsoldto",
      "offset": 101
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 14377759477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowShipToName",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 65
    },
    {
      "val": "temp_newshipto",
      "offset": 101
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 18031891476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountslistnonselectedrow",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 59
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 14723558224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "changeButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 24591492833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToName",
      "offset": 15
    },
    {
      "val": "temp_newsoldto",
      "offset": 43
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 14507119311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToName",
      "offset": 15
    },
    {
      "val": "temp_newshipto",
      "offset": 43
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 14586261572,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 11497819243,
  "status": "passed"
});
formatter.after({
  "duration": 370432,
  "status": "passed"
});
formatter.before({
  "duration": 26529675,
  "status": "passed"
});
formatter.scenario({
  "line": 444,
  "name": "Catg : Global Header/Navigation ; Search by SHIP to account and make sure search results rows contains that SHIPTO ACT number",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-search-by-ship-to-account-and-make-sure-search-results-rows-contains-that-shipto-act-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 438,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 439,
      "name": "@market_smoke3"
    },
    {
      "line": 440,
      "name": "@market_smoke"
    },
    {
      "line": 441,
      "name": "@market_smoke_prod"
    },
    {
      "line": 442,
      "name": "@global_header"
    },
    {
      "line": 443,
      "name": "@searchby_Shipto_verifyreturned_changeACCOUNT"
    }
  ]
});
formatter.step({
  "line": 445,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 446,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 447,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 448,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 449,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 450,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 451,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 452,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 453,
  "name": "I click on element \"cancelButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 454,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 455,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 456,
  "name": "Enter Text \"temp_newshipto\" in Text Box field \"search\" in module \"changeAccountDropDown\"",
  "keyword": "And "
});
formatter.step({
  "line": 457,
  "name": "I click on element \"searchButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 458,
  "name": "Make sure the search results contains the account \"number\" that is being searched for",
  "keyword": "And "
});
formatter.step({
  "line": 460,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 461,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 462,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 463,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 464,
  "name": "I verify that \u0027SoldToNum\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 465,
  "name": "I verify that \u0027ShipToNum\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 466,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 23845134315,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 6046106992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 1114639523,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 8958991559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewAllAccounts",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 11541462380,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 1001160384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowSoldToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newsoldto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 3149704917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowShipToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newshipto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 4916016241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancelButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 7296966225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 3664213977,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 12220332719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_newshipto",
      "offset": 12
    },
    {
      "val": "search",
      "offset": 47
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 11656681693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 7771519608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "number",
      "offset": 51
    }
  ],
  "location": "changeaccountdropdown.groovy:257"
});
formatter.result({
  "duration": 1412566655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowSoldToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newsoldto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 6786882114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowShipToValue",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    },
    {
      "val": "temp_newshipto",
      "offset": 102
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 4181050405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountslistnonselectedrow",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 59
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 8461979366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "changeButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 18947839840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToNum",
      "offset": 15
    },
    {
      "val": "temp_newsoldto",
      "offset": 42
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 20601866779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToNum",
      "offset": 15
    },
    {
      "val": "temp_newshipto",
      "offset": 42
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 17814923320,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 8668360842,
  "status": "passed"
});
formatter.after({
  "duration": 338212,
  "status": "passed"
});
formatter.before({
  "duration": 25154873,
  "status": "passed"
});
formatter.scenario({
  "line": 474,
  "name": "Catg : Global Header/Navigation ; Search by ship to NAME and make sure search results rows contains that ship to name",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-search-by-ship-to-name-and-make-sure-search-results-rows-contains-that-ship-to-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 468,
      "name": "@market_smoke3"
    },
    {
      "line": 469,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 470,
      "name": "@market_smoke"
    },
    {
      "line": 471,
      "name": "@market_smoke_prod"
    },
    {
      "line": 472,
      "name": "@global_header"
    },
    {
      "line": 473,
      "name": "@searchby_shipto_verifyreturned_changeNAME"
    }
  ]
});
formatter.step({
  "line": 475,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 476,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 477,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 478,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 479,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 481,
  "name": "Save value of element \"firstnonselectedrowSoldToName\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 482,
  "name": "Save value of element \"firstnonselectedrowShipToName\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 483,
  "name": "I click on element \"cancelButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 484,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 485,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 486,
  "name": "Enter Text \"temp_newshipto\" in Text Box field \"search\" in module \"changeAccountDropDown\"",
  "keyword": "And "
});
formatter.step({
  "line": 487,
  "name": "I click on element \"searchButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 488,
  "name": "Make sure the search results contains the account \"name\" that is being searched for",
  "keyword": "And "
});
formatter.step({
  "line": 490,
  "name": "Save value of element \"firstnonselectedrowSoldToName\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 491,
  "name": "Save value of element \"firstnonselectedrowShipToName\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 492,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 493,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 494,
  "name": "Wait for 5000 ms",
  "keyword": "And "
});
formatter.step({
  "line": 495,
  "name": "I verify that \u0027SoldToName\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 496,
  "name": "I verify that \u0027ShipToName\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 497,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 26536483818,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 6078079597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 1122818403,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 13639066623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viewAllAccounts",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 12672158670,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 2038348536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowSoldToName",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 65
    },
    {
      "val": "temp_newsoldto",
      "offset": 101
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 14588082780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowShipToName",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 65
    },
    {
      "val": "temp_newshipto",
      "offset": 101
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 18279384203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancelButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 8134318845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Account",
      "offset": 38
    }
  ],
  "location": "changeaccountlink.groovy:16"
});
formatter.result({
  "duration": 1114174991,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 10263161629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_newshipto",
      "offset": 12
    },
    {
      "val": "search",
      "offset": 47
    },
    {
      "val": "changeAccountDropDown",
      "offset": 66
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 8511661160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 8312374018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 51
    }
  ],
  "location": "changeaccountdropdown.groovy:257"
});
formatter.result({
  "duration": 1268224682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowSoldToName",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 65
    },
    {
      "val": "temp_newsoldto",
      "offset": 101
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 11339880935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstnonselectedrowShipToName",
      "offset": 23
    },
    {
      "val": "changeAccountDropDown",
      "offset": 65
    },
    {
      "val": "temp_newshipto",
      "offset": 101
    }
  ],
  "location": "changeaccountsubmit.groovy:71"
});
formatter.result({
  "duration": 16115663357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountslistnonselectedrow",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 59
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 11274554147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "changeButton",
      "offset": 20
    },
    {
      "val": "changeAccountDropDown",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 24183449319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5000",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:348"
});
formatter.result({
  "duration": 5000458083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToName",
      "offset": 15
    },
    {
      "val": "temp_newsoldto",
      "offset": 43
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 13488777590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToName",
      "offset": 15
    },
    {
      "val": "temp_newshipto",
      "offset": 43
    }
  ],
  "location": "login.groovy:85"
});
formatter.result({
  "duration": 15879642646,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 8790146292,
  "status": "passed"
});
formatter.after({
  "duration": 553273,
  "status": "passed"
});
formatter.before({
  "duration": 25225863,
  "status": "passed"
});
formatter.scenario({
  "line": 505,
  "name": "Catg : Global Header/Navigation ; Sold to account details",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-sold-to-account-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 499,
      "name": "@market_smoke3"
    },
    {
      "line": 500,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 501,
      "name": "@market_smoke"
    },
    {
      "line": 502,
      "name": "@market_smoke_prod"
    },
    {
      "line": 503,
      "name": "@global_header"
    },
    {
      "line": 504,
      "name": "@soldto_shipto_account_details"
    }
  ]
});
formatter.step({
  "line": 506,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 507,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 508,
  "name": "I click element \u0027SoldTo\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 509,
  "name": "Make sure element \"SoldToName\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 510,
  "name": "Make sure element \"SoldToName2\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 511,
  "name": "Make sure element \"SoldToAddress1\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 512,
  "name": "Make sure element \"SoldToState\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 513,
  "name": "Make sure element \"SoldToBaseValue\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 515,
  "name": "I click element \u0027ShipTo\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 516,
  "name": "Make sure element \"ShipToName\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 517,
  "name": "Make sure element \"ShipToName2\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 518,
  "name": "Make sure element \"ShipToAddress1\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 519,
  "name": "Make sure element \"ShipToState\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 520,
  "name": "Make sure element \"ShipToBaseValue\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 521,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 23037401842,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 4805244650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldTo",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 6905434341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToName",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 34
    },
    {
      "val": "global",
      "offset": 51
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 3825938867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToName2",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 35
    },
    {
      "val": "global",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 6098178033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToAddress1",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 38
    },
    {
      "val": "global",
      "offset": 55
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 6114323963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToState",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 35
    },
    {
      "val": "global",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 4257259479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SoldToBaseValue",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 39
    },
    {
      "val": "global",
      "offset": 56
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 4717965843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipTo",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 6307637115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToName",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 34
    },
    {
      "val": "global",
      "offset": 51
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 5523235912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToName2",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 35
    },
    {
      "val": "global",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 6004033140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToAddress1",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 38
    },
    {
      "val": "global",
      "offset": 55
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 4898114846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToState",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 35
    },
    {
      "val": "global",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 3212953898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShipToBaseValue",
      "offset": 19
    },
    {
      "val": "present",
      "offset": 39
    },
    {
      "val": "global",
      "offset": 56
    }
  ],
  "location": "common_csp.groovy:69"
});
formatter.result({
  "duration": 4747111516,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 8548867854,
  "status": "passed"
});
formatter.after({
  "duration": 405842,
  "status": "passed"
});
formatter.before({
  "duration": 28192681,
  "status": "passed"
});
formatter.scenario({
  "line": 529,
  "name": "Catg : Global Header/Navigation ; Click/Tap logo to go to Home page",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-logo-to-go-to-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 523,
      "name": "@market_smoke3"
    },
    {
      "line": 524,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 525,
      "name": "@market_smoke"
    },
    {
      "line": 526,
      "name": "@market_smoke_prod"
    },
    {
      "line": 527,
      "name": "@global_header"
    },
    {
      "line": 528,
      "name": "@logo_homepage"
    }
  ]
});
formatter.step({
  "line": 530,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 531,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 532,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 533,
  "name": "I click on \u0027Logo\u0027 in Tablet Header",
  "keyword": "When "
});
formatter.step({
  "line": 534,
  "name": "I am on \"BasePage\" page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 27299642394,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 677077061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:276"
});
formatter.result({
  "duration": 21295876450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logo",
      "offset": 12
    }
  ],
  "location": "basepage.groovy:104"
});
formatter.result({
  "duration": 10992121881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 1443784549,
  "status": "passed"
});
formatter.after({
  "duration": 301472,
  "status": "passed"
});
formatter.before({
  "duration": 26035472,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 536,
      "value": "##hardcoded"
    },
    {
      "line": 537,
      "value": "##NOT IN PROD AS NO CUSTOMER ITEM # DATA"
    }
  ],
  "line": 542,
  "name": "Catg : Search ; Search by Customer Item Number",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-search-;-search-by-customer-item-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 538,
      "name": "@search_customer_item"
    },
    {
      "line": 539,
      "name": "@market_smoke3"
    },
    {
      "line": 540,
      "name": "@market_smoke"
    },
    {
      "line": 541,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 543,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 544,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 545,
  "name": "Enter Text \"106097\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 546,
  "name": "I click \u0027ONCE\u0027 on 1 item from the \u0027TypeaheadCustomerItems\u0027 in tablet header navigation",
  "keyword": "Then "
});
formatter.step({
  "line": 547,
  "name": "I must be taken to an \u0027ItemDetailsPage\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 548,
  "name": "I verify the Text on \u0027customernum\u0027 is \u0027106097\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 549,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 27944975624,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 667015289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "106097",
      "offset": 12
    },
    {
      "val": "SearchBox",
      "offset": 39
    },
    {
      "val": "globalHeader",
      "offset": 61
    }
  ],
  "location": "common_csp.groovy:109"
});
formatter.result({
  "duration": 17555715941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ONCE",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 18
    },
    {
      "val": "TypeaheadCustomerItems",
      "offset": 35
    }
  ],
  "location": "categorynavigation.groovy:120"
});
formatter.result({
  "duration": 17403701553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 2200149027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "customernum",
      "offset": 22
    },
    {
      "val": "106097",
      "offset": 39
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 43570451209,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 9851708870,
  "status": "passed"
});
formatter.after({
  "duration": 325065,
  "status": "passed"
});
formatter.before({
  "duration": 25432377,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 551,
      "value": "##hardcoded"
    },
    {
      "line": 552,
      "value": "##no data in prod which has customer item # and value link and core"
    }
  ],
  "line": 557,
  "name": "Catg : Search ; Verify details of each item returned",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-search-;-verify-details-of-each-item-returned",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 553,
      "name": "@market_smoke3"
    },
    {
      "line": 554,
      "name": "@market_smoke"
    },
    {
      "line": 555,
      "name": "@search"
    },
    {
      "line": 556,
      "name": "@item_valuelink_core_contract_customer"
    }
  ]
});
formatter.step({
  "line": 558,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 559,
  "name": "Search product by word \"30503\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 560,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 561,
  "name": "For row item with \"MaterialNumvalue\" as \"30503-015A\" verify elements \"core,customernum,contractlabel,contractnumber\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 562,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 24828521753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30503",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 32597754613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 1511805884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MaterialNumvalue",
      "offset": 19
    },
    {
      "val": "30503-015A",
      "offset": 41
    },
    {
      "val": "core,customernum,contractlabel,contractnumber",
      "offset": 70
    }
  ],
  "location": "searchresultpage.groovy:1255"
});
formatter.result({
  "duration": 16232805156,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 7665474283,
  "status": "passed"
});
formatter.after({
  "duration": 307589,
  "status": "passed"
});
formatter.before({
  "duration": 25500955,
  "status": "passed"
});
formatter.scenario({
  "line": 570,
  "name": "Catg : Search ; Number of search results",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-search-;-number-of-search-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 564,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 565,
      "name": "@market_smoke_prod"
    },
    {
      "line": 566,
      "name": "@market_smoke3"
    },
    {
      "line": 567,
      "name": "@market_smoke"
    },
    {
      "line": 568,
      "name": "@search"
    },
    {
      "line": 569,
      "name": "@search_results_count"
    }
  ]
});
formatter.step({
  "line": 571,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 572,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 573,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "When "
});
formatter.step({
  "line": 574,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "When "
});
formatter.step({
  "line": 575,
  "name": "The count of element \"ResultItems\" is \u002715\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 576,
  "name": "Save count of element \"ResultItems\" to variable \"temp_searchresults_count\"",
  "keyword": "And "
});
formatter.step({
  "line": 577,
  "name": "Make sure elements \"TotalproductsCount\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 578,
  "name": "Save integer part of element \"TotalproductsCount\" to variable \"temp_totalproductscount\"",
  "keyword": "And "
});
formatter.step({
  "line": 579,
  "name": "If \"temp_totalproductscount\" is more than \"temp_searchresults_count\" than click on \"LoadMoreBtn\"",
  "keyword": "When "
});
formatter.step({
  "line": 580,
  "name": "The count of element \"ResultItems\" is \u002730\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 581,
  "name": "Save count of element \"ResultItems\" to variable \"temp_searchresults_count\"",
  "keyword": "And "
});
formatter.step({
  "line": 582,
  "name": "I verify the Text on \u0027Resultsfetchedbottom\u0027 is \u0027temp_searchresults_count\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 583,
  "name": "I verify the Text on \u0027Totalresultsbottom\u0027 is \u0027temp_totalproductscount\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 584,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 26621963088,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 739910391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 37765277939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 382691209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ResultItems",
      "offset": 22
    },
    {
      "val": "15",
      "offset": 39
    }
  ],
  "location": "searchresultpage.groovy:716"
});
formatter.result({
  "duration": 2744866128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ResultItems",
      "offset": 23
    },
    {
      "val": "temp_searchresults_count",
      "offset": 49
    }
  ],
  "location": "common_csp.groovy:546"
});
formatter.result({
  "duration": 1175663416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TotalproductsCount",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1743546209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "integer",
      "offset": 5
    },
    {
      "val": "TotalproductsCount",
      "offset": 30
    },
    {
      "val": "temp_totalproductscount",
      "offset": 63
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 1481517346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_totalproductscount",
      "offset": 4
    },
    {
      "val": "more",
      "offset": 32
    },
    {
      "val": "temp_searchresults_count",
      "offset": 43
    },
    {
      "val": "click",
      "offset": 74
    },
    {
      "val": "LoadMoreBtn",
      "offset": 84
    }
  ],
  "location": "common_csp.groovy:554"
});
formatter.result({
  "duration": 21262600880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ResultItems",
      "offset": 22
    },
    {
      "val": "30",
      "offset": 39
    }
  ],
  "location": "searchresultpage.groovy:716"
});
formatter.result({
  "duration": 2601732261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ResultItems",
      "offset": 23
    },
    {
      "val": "temp_searchresults_count",
      "offset": 49
    }
  ],
  "location": "common_csp.groovy:546"
});
formatter.result({
  "duration": 1185012782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resultsfetchedbottom",
      "offset": 22
    },
    {
      "val": "temp_searchresults_count",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 8059912316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Totalresultsbottom",
      "offset": 22
    },
    {
      "val": "temp_totalproductscount",
      "offset": 46
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 8668726527,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 9638902676,
  "status": "passed"
});
formatter.after({
  "duration": 307915,
  "status": "passed"
});
formatter.before({
  "duration": 29563379,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 586,
      "value": "##no data in prod which has customer item # and value link and core"
    }
  ],
  "line": 591,
  "name": "Catg : Search ; Verify details of each item returned",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-search-;-verify-details-of-each-item-returned",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 587,
      "name": "@market_smoke3"
    },
    {
      "line": 588,
      "name": "@market_smoke"
    },
    {
      "line": 589,
      "name": "@search"
    },
    {
      "line": 590,
      "name": "@searchcustomer_valuelink_compare_alternative"
    }
  ]
});
formatter.step({
  "line": 592,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 593,
  "name": "Search product by word \"30503\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 594,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 595,
  "name": "I click on \u0027valuelinkfilter\u0027 element",
  "keyword": "And "
});
formatter.step({
  "line": 596,
  "name": "I click on \u0027valuelinkcheckbox\u0027 element",
  "keyword": "And "
});
formatter.step({
  "line": 597,
  "name": "Wait for 200 ms",
  "keyword": "And "
});
formatter.step({
  "line": 598,
  "name": "For row item with \"MaterialNumvalue\" as \"30503-015A\" verify elements \"core,customernum,contractlabel,contractnumber\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 599,
  "name": "For row item with \"MaterialNumvalue\" as \"30503-015A\" save whole part of element \"uom_price_dropdown_value\" to variable \"temp_price_default\"",
  "keyword": "And "
});
formatter.step({
  "line": 600,
  "name": "For row item with \"MaterialNumvalue\" as \"30503-015A\" save whole part of element \"uom_price_dropdown_value\" to variable \"temp_quantity\"",
  "keyword": "And "
});
formatter.step({
  "line": 601,
  "name": "For row item with \"MaterialNumvalue\" as \"30503-015A\" save whole part of element \"ManufacturerNum\" to variable \"temp_manufacturernum\"",
  "keyword": "And "
});
formatter.step({
  "line": 602,
  "name": "For row item with \"MaterialNumvalue\" as \"30503-015A\" save whole part of element \"MaterialNum\" to variable \"temp_materialnum\"",
  "keyword": "And "
});
formatter.step({
  "line": 603,
  "name": "Update Price and quantity of product",
  "keyword": "And "
});
formatter.step({
  "line": 604,
  "name": "For row item with \"MaterialNumvalue\" as \"30503-015A\" save whole part of element \"uom_price_dropdown_value\" to variable \"temp_price_changed\"",
  "keyword": "And "
});
formatter.step({
  "line": 605,
  "name": "For row item with \"MaterialNumvalue\" as \"30503-015A\" save whole part of element \"uom_price_dropdown_value\" to variable \"temp_quantity_changed\"",
  "keyword": "And "
});
formatter.step({
  "line": 606,
  "name": "I click on \u0027uom_price_dropdown_value\u0027 element",
  "keyword": "And "
});
formatter.step({
  "line": 607,
  "name": "Wait for 200 ms",
  "keyword": "And "
});
formatter.step({
  "line": 608,
  "name": "I click on \u0027CheckAvailibity\u0027 element",
  "keyword": "And "
});
formatter.step({
  "line": 609,
  "name": "Make sure elements \"availibile_not,AvailabilityMsg\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 610,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 611,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 612,
  "name": "Add \"1\" items to compare and make sure compare tray appears",
  "keyword": "Then "
});
formatter.step({
  "line": 613,
  "name": "The count of element \"CompareTrayItem\" is \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 614,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 615,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 616,
  "name": "Make sure elements \"CompareTrayClearAll\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 617,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 618,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayItemImage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 619,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayItemNum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 620,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 621,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 622,
  "name": "if \"SearchResultPage\" page returned than hit on item that contains \"temp_materialnum\" and \"temp_manufacturernum\" and get to idp page",
  "keyword": "And "
});
formatter.step({
  "line": 623,
  "name": "I am on \"ItemDetailsPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 624,
  "name": "I click on \u0027ItemViewAlternativeLink\u0027 element",
  "keyword": "And "
});
formatter.step({
  "line": 625,
  "name": "I must be taken to an \u0027ShopAlternativesPage\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 626,
  "name": "Element \"alternativesTitle\" has value \"Shop Alternatives\" in page \"ShopAlternativesPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 627,
  "name": "Make sure elements \"orig_prod_manufacturername,orig_prod_material,orig_prod_title,orig_prod_selectbutton\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 628,
  "name": "Make sure elements \"orig_prod_price,orig_prod_availibity,orig_prod_description,orig_prod_manufacturernumber\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 629,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 37816616847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30503",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 28424675617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 655751883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valuelinkfilter",
      "offset": 12
    }
  ],
  "location": "searchresultpage.groovy:468"
});
formatter.result({
  "duration": 33626151535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valuelinkcheckbox",
      "offset": 12
    }
  ],
  "location": "searchresultpage.groovy:468"
});
formatter.result({
  "duration": 35358317309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:348"
});
formatter.result({
  "duration": 200281231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MaterialNumvalue",
      "offset": 19
    },
    {
      "val": "30503-015A",
      "offset": 41
    },
    {
      "val": "core,customernum,contractlabel,contractnumber",
      "offset": 70
    }
  ],
  "location": "searchresultpage.groovy:1255"
});
formatter.result({
  "duration": 3388544938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MaterialNumvalue",
      "offset": 19
    },
    {
      "val": "30503-015A",
      "offset": 41
    },
    {
      "val": "whole",
      "offset": 58
    },
    {
      "val": "uom_price_dropdown_value",
      "offset": 81
    },
    {
      "val": "temp_price_default",
      "offset": 120
    }
  ],
  "location": "changeaccountsubmit.groovy:121"
});
formatter.result({
  "duration": 2886591535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MaterialNumvalue",
      "offset": 19
    },
    {
      "val": "30503-015A",
      "offset": 41
    },
    {
      "val": "whole",
      "offset": 58
    },
    {
      "val": "uom_price_dropdown_value",
      "offset": 81
    },
    {
      "val": "temp_quantity",
      "offset": 120
    }
  ],
  "location": "changeaccountsubmit.groovy:121"
});
formatter.result({
  "duration": 5757327343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MaterialNumvalue",
      "offset": 19
    },
    {
      "val": "30503-015A",
      "offset": 41
    },
    {
      "val": "whole",
      "offset": 58
    },
    {
      "val": "ManufacturerNum",
      "offset": 81
    },
    {
      "val": "temp_manufacturernum",
      "offset": 111
    }
  ],
  "location": "changeaccountsubmit.groovy:121"
});
formatter.result({
  "duration": 3338178876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MaterialNumvalue",
      "offset": 19
    },
    {
      "val": "30503-015A",
      "offset": 41
    },
    {
      "val": "whole",
      "offset": 58
    },
    {
      "val": "MaterialNum",
      "offset": 81
    },
    {
      "val": "temp_materialnum",
      "offset": 107
    }
  ],
  "location": "changeaccountsubmit.groovy:121"
});
formatter.result({
  "duration": 4375039461,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:436"
});
formatter.result({
  "duration": 9630390623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MaterialNumvalue",
      "offset": 19
    },
    {
      "val": "30503-015A",
      "offset": 41
    },
    {
      "val": "whole",
      "offset": 58
    },
    {
      "val": "uom_price_dropdown_value",
      "offset": 81
    },
    {
      "val": "temp_price_changed",
      "offset": 120
    }
  ],
  "location": "changeaccountsubmit.groovy:121"
});
formatter.result({
  "duration": 4417990094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MaterialNumvalue",
      "offset": 19
    },
    {
      "val": "30503-015A",
      "offset": 41
    },
    {
      "val": "whole",
      "offset": 58
    },
    {
      "val": "uom_price_dropdown_value",
      "offset": 81
    },
    {
      "val": "temp_quantity_changed",
      "offset": 120
    }
  ],
  "location": "changeaccountsubmit.groovy:121"
});
formatter.result({
  "duration": 4460181468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "uom_price_dropdown_value",
      "offset": 12
    }
  ],
  "location": "searchresultpage.groovy:468"
});
formatter.result({
  "duration": 4788501334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:348"
});
formatter.result({
  "duration": 200198950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CheckAvailibity",
      "offset": 12
    }
  ],
  "location": "searchresultpage.groovy:468"
});
formatter.result({
  "duration": 4268298083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "availibile_not,AvailabilityMsg",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 56
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 1174627217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 12
    },
    {
      "val": "CompareTrayClearAll",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:351"
});
formatter.result({
  "duration": 1061938366,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 5777558263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    }
  ],
  "location": "searchresultpage.groovy:579"
});
formatter.result({
  "duration": 12693799286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayItem",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 43
    }
  ],
  "location": "searchresultpage.groovy:716"
});
formatter.result({
  "duration": 278660714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 42
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 874792819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayMessage",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 740813213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayClearAll",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 747052393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 425083711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayItemImage",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 424414133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayItemNum",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 436581396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "CompareTrayRemoveItem",
      "offset": 38
    }
  ],
  "location": "searchresultpage.groovy:738"
});
formatter.result({
  "duration": 411429924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CompareTrayTitle",
      "offset": 12
    },
    {
      "val": "CompareTrayClearAll",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:351"
});
formatter.result({
  "duration": 7982001512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 4
    },
    {
      "val": "temp_materialnum",
      "offset": 68
    },
    {
      "val": "temp_manufacturernum",
      "offset": 91
    }
  ],
  "location": "common_csp.groovy:445"
});
formatter.result({
  "duration": 1989929090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 5030060001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemViewAlternativeLink",
      "offset": 12
    }
  ],
  "location": "searchresultpage.groovy:468"
});
formatter.result({
  "duration": 6208301500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShopAlternativesPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:188"
});
formatter.result({
  "duration": 890428447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alternativesTitle",
      "offset": 9
    },
    {
      "val": "Shop Alternatives",
      "offset": 39
    },
    {
      "val": "ShopAlternativesPage",
      "offset": 67
    }
  ],
  "location": "common_csp.groovy:264"
});
formatter.result({
  "duration": 1252183101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orig_prod_manufacturername,orig_prod_material,orig_prod_title,orig_prod_selectbutton",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 110
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 3590055647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orig_prod_price,orig_prod_availibity,orig_prod_description,orig_prod_manufacturernumber",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 113
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 20307749304,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:82"
});
formatter.result({
  "duration": 7769235115,
  "status": "passed"
});
formatter.after({
  "duration": 325929,
  "status": "passed"
});
formatter.before({
  "duration": 26727498,
  "status": "passed"
});
formatter.scenario({
  "line": 638,
  "name": "Catg : Shopping Cart ; Change price and quantity and try to navigate out of shopping cart to get update/discard changes messages",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-change-price-and-quantity-and-try-to-navigate-out-of-shopping-cart-to-get-update/discard-changes-messages",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 632,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 633,
      "name": "@market_smoke_prod"
    },
    {
      "line": 634,
      "name": "@market_smoke3"
    },
    {
      "line": 635,
      "name": "@market_smoke"
    },
    {
      "line": 636,
      "name": "@shopping"
    },
    {
      "line": 637,
      "name": "@shiopping_price_quantity_update"
    }
  ]
});
formatter.step({
  "line": 639,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 640,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 641,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 642,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "When "
});
formatter.step({
  "line": 643,
  "name": "Select the product that is available",
  "keyword": "And "
});
formatter.step({
  "line": 644,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 645,
  "name": "I verify the Text on \u0027itemsaddedtocart\u0027 is \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 646,
  "name": "I verify the Text on \u0027HeaderCartItemCount\u0027 is \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 647,
  "name": "I click element \u0027cartItemIcon\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 648,
  "name": "I am on \"ShoppingCartPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 649,
  "name": "Save whole part of element \"uom_price_dropdown_value\" to variable \"temp_price_default\"",
  "keyword": "And "
});
formatter.step({
  "line": 650,
  "name": "Save whole part of element \"each_item_quantity\" to variable \"temp_quantity\"",
  "keyword": "And "
});
formatter.step({
  "line": 651,
  "name": "Update Price and quantity of product",
  "keyword": "And "
});
formatter.step({
  "line": 652,
  "name": "Make sure element \"update\" is enabled in page \"\u003cstring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 653,
  "name": "Save whole part of element \"uom_price_dropdown_value\" to variable \"temp_price_changed\"",
  "keyword": "And "
});
formatter.step({
  "line": 654,
  "name": "Save whole part of element \"each_item_quantity\" to variable \"temp_quantity_changed\"",
  "keyword": "And "
});
formatter.step({
  "line": 655,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 656,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 657,
  "name": "Make sure elements \"dialogdiscard\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 658,
  "name": "I click on element \"dialogdiscard\" in module \"globalHeader\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 659,
  "name": "I click element \u0027cartItemIcon\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 660,
  "name": "I am on \"ShoppingCartPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 661,
  "name": "Make sure element \"update\" is disabled in page \"\u003cstring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 662,
  "name": "I verify the Text on \u0027uom_price_dropdown_value\u0027 is \u0027temp_price_default\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 663,
  "name": "I verify the Text on \u0027each_item_quantity\u0027 is \u0027temp_quantity\u0027",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 24267439447,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 739245603,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:13"
});
formatter.result({
  "duration": 121491436585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 26350395015,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:294"
});
formatter.result({
  "duration": 75356794917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 440052008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "itemsaddedtocart",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 10240653532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeaderCartItemCount",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 9702157515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cartItemIcon",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 35358963200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShoppingCartPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 876064547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "whole",
      "offset": 5
    },
    {
      "val": "uom_price_dropdown_value",
      "offset": 28
    },
    {
      "val": "temp_price_default",
      "offset": 67
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 5584932350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "whole",
      "offset": 5
    },
    {
      "val": "each_item_quantity",
      "offset": 28
    },
    {
      "val": "temp_quantity",
      "offset": 61
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 5488654316,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:436"
});
formatter.result({
  "duration": 23324169692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "update",
      "offset": 19
    },
    {
      "val": "enabled",
      "offset": 30
    },
    {
      "val": "\u003cstring\u003e",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:253"
});
formatter.result({
  "duration": 10226914744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "whole",
      "offset": 5
    },
    {
      "val": "uom_price_dropdown_value",
      "offset": 28
    },
    {
      "val": "temp_price_changed",
      "offset": 67
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 6377378162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "whole",
      "offset": 5
    },
    {
      "val": "each_item_quantity",
      "offset": 28
    },
    {
      "val": "temp_quantity_changed",
      "offset": 61
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 3686412222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 857547000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:276"
});
formatter.result({
  "duration": 22448870903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dialogdiscard",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 39
    }
  ],
  "location": "common_csp.groovy:309"
});
formatter.result({
  "duration": 5699059924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dialogdiscard",
      "offset": 20
    },
    {
      "val": "globalHeader",
      "offset": 46
    }
  ],
  "location": "common_csp.groovy:527"
});
formatter.result({
  "duration": 20128703270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cartItemIcon",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 34735290447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShoppingCartPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 646149121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "update",
      "offset": 19
    },
    {
      "val": "disabled",
      "offset": 30
    },
    {
      "val": "\u003cstring\u003e",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:253"
});
formatter.result({
  "duration": 3718390395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "uom_price_dropdown_value",
      "offset": 22
    },
    {
      "val": "temp_price_default",
      "offset": 52
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 25023959993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "each_item_quantity",
      "offset": 22
    },
    {
      "val": "temp_quantity",
      "offset": 46
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 24962230635,
  "status": "passed"
});
formatter.after({
  "duration": 348130,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 671,
  "name": "Catg : Shopping Cart ; Run THREE TIMEs --Change PO NUMBER,MEMO,PACKAGE SLIP and navigate out of shopping cart",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-run-three-times---change-po-number,memo,package-slip-and-navigate-out-of-shopping-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 665,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 666,
      "name": "@market_smoke_prod"
    },
    {
      "line": 667,
      "name": "@market_smoke3"
    },
    {
      "line": 668,
      "name": "@market_smoke"
    },
    {
      "line": 669,
      "name": "@shopping"
    },
    {
      "line": 670,
      "name": "@shiopping_po_package_update"
    }
  ]
});
formatter.step({
  "line": 672,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 673,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 674,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 675,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "When "
});
formatter.step({
  "line": 676,
  "name": "Select the product that is available",
  "keyword": "And "
});
formatter.step({
  "line": 677,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 678,
  "name": "I verify the Text on \u0027itemsaddedtocart\u0027 is \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 679,
  "name": "I verify the Text on \u0027HeaderCartItemCount\u0027 is \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 680,
  "name": "I click element \u0027cartItemIcon\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 681,
  "name": "I am on \"ShoppingCartPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 682,
  "name": "Save whole part of element \"\u003cfield\u003e\" to variable \"temp_po_current_field_value\"",
  "keyword": "And "
});
formatter.step({
  "line": 683,
  "name": "I Enter Text \"TEST NUMBER AND TEXT\" in Text Box field \"\u003cfield\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 684,
  "name": "Make sure element \"update\" is enabled in page \"\u003cstring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 685,
  "name": "Save whole part of element \"\u003cfield\u003e\" to variable \"temp_po_changed_field_value\"",
  "keyword": "And "
});
formatter.step({
  "line": 686,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 687,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 688,
  "name": "I click element \u0027cartItemIcon\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 689,
  "name": "I am on \"ShoppingCartPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 690,
  "name": "Make sure element \"update\" is disabled in page \"\u003cstring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 691,
  "name": "I verify the Text on \u0027\u003cfield\u003e\u0027 is \u0027temp_po_current_field_value\u0027",
  "keyword": "And "
});
formatter.examples({
  "line": 693,
  "name": "",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-run-three-times---change-po-number,memo,package-slip-and-navigate-out-of-shopping-cart;",
  "rows": [
    {
      "cells": [
        "field"
      ],
      "line": 694,
      "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-run-three-times---change-po-number,memo,package-slip-and-navigate-out-of-shopping-cart;;1"
    },
    {
      "cells": [
        "poNumberField"
      ],
      "line": 695,
      "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-run-three-times---change-po-number,memo,package-slip-and-navigate-out-of-shopping-cart;;2"
    },
    {
      "cells": [
        "poMemoField"
      ],
      "line": 696,
      "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-run-three-times---change-po-number,memo,package-slip-and-navigate-out-of-shopping-cart;;3"
    },
    {
      "cells": [
        "packingSlipField"
      ],
      "line": 697,
      "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-run-three-times---change-po-number,memo,package-slip-and-navigate-out-of-shopping-cart;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26530417,
  "status": "passed"
});
formatter.scenario({
  "line": 695,
  "name": "Catg : Shopping Cart ; Run THREE TIMEs --Change PO NUMBER,MEMO,PACKAGE SLIP and navigate out of shopping cart",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-run-three-times---change-po-number,memo,package-slip-and-navigate-out-of-shopping-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 666,
      "name": "@market_smoke_prod"
    },
    {
      "line": 668,
      "name": "@market_smoke"
    },
    {
      "line": 667,
      "name": "@market_smoke3"
    },
    {
      "line": 669,
      "name": "@shopping"
    },
    {
      "line": 665,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 670,
      "name": "@shiopping_po_package_update"
    }
  ]
});
formatter.step({
  "line": 672,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 673,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 674,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 675,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "When "
});
formatter.step({
  "line": 676,
  "name": "Select the product that is available",
  "keyword": "And "
});
formatter.step({
  "line": 677,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 678,
  "name": "I verify the Text on \u0027itemsaddedtocart\u0027 is \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 679,
  "name": "I verify the Text on \u0027HeaderCartItemCount\u0027 is \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 680,
  "name": "I click element \u0027cartItemIcon\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 681,
  "name": "I am on \"ShoppingCartPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 682,
  "name": "Save whole part of element \"poNumberField\" to variable \"temp_po_current_field_value\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 683,
  "name": "I Enter Text \"TEST NUMBER AND TEXT\" in Text Box field \"poNumberField\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 684,
  "name": "Make sure element \"update\" is enabled in page \"\u003cstring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 685,
  "name": "Save whole part of element \"poNumberField\" to variable \"temp_po_changed_field_value\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 686,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 687,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 688,
  "name": "I click element \u0027cartItemIcon\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 689,
  "name": "I am on \"ShoppingCartPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 690,
  "name": "Make sure element \"update\" is disabled in page \"\u003cstring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 691,
  "name": "I verify the Text on \u0027poNumberField\u0027 is \u0027temp_po_current_field_value\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 27451459388,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2784326984,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:13"
});
formatter.result({
  "duration": 62154884710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 24206086558,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:294"
});
formatter.result({
  "duration": 60260446080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 906546388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "itemsaddedtocart",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 5281901093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeaderCartItemCount",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 7784675509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cartItemIcon",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 36751702473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShoppingCartPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 1006661861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "whole",
      "offset": 5
    },
    {
      "val": "poNumberField",
      "offset": 28
    },
    {
      "val": "temp_po_current_field_value",
      "offset": 56
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 2615843179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST NUMBER AND TEXT",
      "offset": 14
    },
    {
      "val": "poNumberField",
      "offset": 55
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "duration": 4896233338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "update",
      "offset": 19
    },
    {
      "val": "enabled",
      "offset": 30
    },
    {
      "val": "\u003cstring\u003e",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:253"
});
formatter.result({
  "duration": 12477616496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "whole",
      "offset": 5
    },
    {
      "val": "poNumberField",
      "offset": 28
    },
    {
      "val": "temp_po_changed_field_value",
      "offset": 56
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 3210917263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 1108523619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:276"
});
formatter.result({
  "duration": 23341578254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cartItemIcon",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 33418117248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShoppingCartPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 602476317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "update",
      "offset": 19
    },
    {
      "val": "disabled",
      "offset": 30
    },
    {
      "val": "\u003cstring\u003e",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:253"
});
formatter.result({
  "duration": 1768413580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "poNumberField",
      "offset": 22
    },
    {
      "val": "temp_po_current_field_value",
      "offset": 41
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 9123547179,
  "status": "passed"
});
formatter.after({
  "duration": 311896,
  "status": "passed"
});
formatter.before({
  "duration": 43285654,
  "status": "passed"
});
formatter.scenario({
  "line": 696,
  "name": "Catg : Shopping Cart ; Run THREE TIMEs --Change PO NUMBER,MEMO,PACKAGE SLIP and navigate out of shopping cart",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-run-three-times---change-po-number,memo,package-slip-and-navigate-out-of-shopping-cart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 666,
      "name": "@market_smoke_prod"
    },
    {
      "line": 668,
      "name": "@market_smoke"
    },
    {
      "line": 667,
      "name": "@market_smoke3"
    },
    {
      "line": 669,
      "name": "@shopping"
    },
    {
      "line": 665,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 670,
      "name": "@shiopping_po_package_update"
    }
  ]
});
formatter.step({
  "line": 672,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 673,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 674,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 675,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "When "
});
formatter.step({
  "line": 676,
  "name": "Select the product that is available",
  "keyword": "And "
});
formatter.step({
  "line": 677,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 678,
  "name": "I verify the Text on \u0027itemsaddedtocart\u0027 is \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 679,
  "name": "I verify the Text on \u0027HeaderCartItemCount\u0027 is \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 680,
  "name": "I click element \u0027cartItemIcon\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 681,
  "name": "I am on \"ShoppingCartPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 682,
  "name": "Save whole part of element \"poMemoField\" to variable \"temp_po_current_field_value\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 683,
  "name": "I Enter Text \"TEST NUMBER AND TEXT\" in Text Box field \"poMemoField\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 684,
  "name": "Make sure element \"update\" is enabled in page \"\u003cstring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 685,
  "name": "Save whole part of element \"poMemoField\" to variable \"temp_po_changed_field_value\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 686,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 687,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 688,
  "name": "I click element \u0027cartItemIcon\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 689,
  "name": "I am on \"ShoppingCartPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 690,
  "name": "Make sure element \"update\" is disabled in page \"\u003cstring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 691,
  "name": "I verify the Text on \u0027poMemoField\u0027 is \u0027temp_po_current_field_value\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 25860876528,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 713771561,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:13"
});
formatter.result({
  "duration": 59858768891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 22444538878,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:294"
});
formatter.result({
  "duration": 58006864109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 417055893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "itemsaddedtocart",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 7465982572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeaderCartItemCount",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 7260045827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cartItemIcon",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 32350335868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShoppingCartPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 653286853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "whole",
      "offset": 5
    },
    {
      "val": "poMemoField",
      "offset": 28
    },
    {
      "val": "temp_po_current_field_value",
      "offset": 54
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 2983884101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST NUMBER AND TEXT",
      "offset": 14
    },
    {
      "val": "poMemoField",
      "offset": 55
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "duration": 6582883994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "update",
      "offset": 19
    },
    {
      "val": "enabled",
      "offset": 30
    },
    {
      "val": "\u003cstring\u003e",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:253"
});
formatter.result({
  "duration": 9847621408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "whole",
      "offset": 5
    },
    {
      "val": "poMemoField",
      "offset": 28
    },
    {
      "val": "temp_po_changed_field_value",
      "offset": 54
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 2401396304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 1098749554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:276"
});
formatter.result({
  "duration": 23299445213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cartItemIcon",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 32184794993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShoppingCartPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 668178323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "update",
      "offset": 19
    },
    {
      "val": "disabled",
      "offset": 30
    },
    {
      "val": "\u003cstring\u003e",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:253"
});
formatter.result({
  "duration": 2658206633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "poMemoField",
      "offset": 22
    },
    {
      "val": "temp_po_current_field_value",
      "offset": 39
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 6413913247,
  "status": "passed"
});
formatter.after({
  "duration": 407758,
  "status": "passed"
});
formatter.before({
  "duration": 22903128,
  "status": "passed"
});
formatter.scenario({
  "line": 697,
  "name": "Catg : Shopping Cart ; Run THREE TIMEs --Change PO NUMBER,MEMO,PACKAGE SLIP and navigate out of shopping cart",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-shopping-cart-;-run-three-times---change-po-number,memo,package-slip-and-navigate-out-of-shopping-cart;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 666,
      "name": "@market_smoke_prod"
    },
    {
      "line": 668,
      "name": "@market_smoke"
    },
    {
      "line": 667,
      "name": "@market_smoke3"
    },
    {
      "line": 669,
      "name": "@shopping"
    },
    {
      "line": 665,
      "name": "@market_smoke_prod3"
    },
    {
      "line": 670,
      "name": "@shiopping_po_package_update"
    }
  ]
});
formatter.step({
  "line": 672,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 673,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 674,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 675,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "When "
});
formatter.step({
  "line": 676,
  "name": "Select the product that is available",
  "keyword": "And "
});
formatter.step({
  "line": 677,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 678,
  "name": "I verify the Text on \u0027itemsaddedtocart\u0027 is \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 679,
  "name": "I verify the Text on \u0027HeaderCartItemCount\u0027 is \u00271\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 680,
  "name": "I click element \u0027cartItemIcon\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 681,
  "name": "I am on \"ShoppingCartPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 682,
  "name": "Save whole part of element \"packingSlipField\" to variable \"temp_po_current_field_value\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 683,
  "name": "I Enter Text \"TEST NUMBER AND TEXT\" in Text Box field \"packingSlipField\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 684,
  "name": "Make sure element \"update\" is enabled in page \"\u003cstring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 685,
  "name": "Save whole part of element \"packingSlipField\" to variable \"temp_po_changed_field_value\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 686,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 687,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 688,
  "name": "I click element \u0027cartItemIcon\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 689,
  "name": "I am on \"ShoppingCartPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 690,
  "name": "Make sure element \"update\" is disabled in page \"\u003cstring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 691,
  "name": "I verify the Text on \u0027packingSlipField\u0027 is \u0027temp_po_current_field_value\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 25
    }
  ],
  "location": "common_csp.groovy:19"
});
formatter.result({
  "duration": 26486464653,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 720666833,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:13"
});
formatter.result({
  "duration": 52783897638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surgical gloves",
      "offset": 24
    }
  ],
  "location": "searchresultpage.groovy:1158"
});
formatter.result({
  "duration": 22124065924,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:294"
});
formatter.result({
  "duration": 57237217544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 399079845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "itemsaddedtocart",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 5495742442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeaderCartItemCount",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 4468179258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cartItemIcon",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 33352669950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShoppingCartPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 978290368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "whole",
      "offset": 5
    },
    {
      "val": "packingSlipField",
      "offset": 28
    },
    {
      "val": "temp_po_current_field_value",
      "offset": 59
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 2223980865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST NUMBER AND TEXT",
      "offset": 14
    },
    {
      "val": "packingSlipField",
      "offset": 55
    }
  ],
  "location": "common_csp.groovy:173"
});
formatter.result({
  "duration": 6650194020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "update",
      "offset": 19
    },
    {
      "val": "enabled",
      "offset": 30
    },
    {
      "val": "\u003cstring\u003e",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:253"
});
formatter.result({
  "duration": 9706083039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "whole",
      "offset": 5
    },
    {
      "val": "packingSlipField",
      "offset": 28
    },
    {
      "val": "temp_po_changed_field_value",
      "offset": 59
    }
  ],
  "location": "changeaccountsubmit.groovy:92"
});
formatter.result({
  "duration": 1736109420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 758759324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:276"
});
formatter.result({
  "duration": 20380228942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cartItemIcon",
      "offset": 17
    }
  ],
  "location": "searchresultpage.groovy:480"
});
formatter.result({
  "duration": 35506388607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShoppingCartPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:366"
});
formatter.result({
  "duration": 691489941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "update",
      "offset": 19
    },
    {
      "val": "disabled",
      "offset": 30
    },
    {
      "val": "\u003cstring\u003e",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:253"
});
formatter.result({
  "duration": 3117027883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "packingSlipField",
      "offset": 22
    },
    {
      "val": "temp_po_current_field_value",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:391"
});
formatter.result({
  "duration": 4707046242,
  "status": "passed"
});
formatter.after({
  "duration": 360148,
  "status": "passed"
});
});