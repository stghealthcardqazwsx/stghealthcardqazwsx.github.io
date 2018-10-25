$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("navigation/Common.feature");
formatter.feature({
  "line": 1,
  "name": "Market smoke test cases",
  "description": "",
  "id": "market-smoke-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6777403214,
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
  "duration": 22845423538,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1264379337,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 39321022252,
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
  "duration": 36565547243,
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
  "duration": 11185142580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShopAlternativesPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1165762374,
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
  "location": "common_csp.groovy:263"
});
formatter.result({
  "duration": 939497306,
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
  "duration": 1340224155,
  "status": "passed"
});
formatter.after({
  "duration": 9281503,
  "status": "passed"
});
formatter.before({
  "duration": 33193986,
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
  "name": "I select \"O.R. \u0026 Surgical\" from products dropdown",
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
  "duration": 25850286433,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 928266511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O.R. \u0026 Surgical",
      "offset": 10
    }
  ],
  "location": "categorynavigation.groovy:291"
});
formatter.result({
  "duration": 30366347428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1297806850,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 47052716692,
  "status": "passed"
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
  "duration": 12289489669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShopAlternativesPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 945263156,
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
  "duration": 1168883988,
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
  "location": "common_csp.groovy:263"
});
formatter.result({
  "duration": 1121834862,
  "status": "passed"
});
formatter.after({
  "duration": 937100,
  "status": "passed"
});
formatter.before({
  "duration": 26869164,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 38,
      "value": "#hardcoded"
    }
  ],
  "line": 45,
  "name": "Catg : Alternatives ; Open Alternative option and Verify details of ORIGINAL products",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-alternatives-;-open-alternative-option-and-verify-details-of-original-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@market_smoke"
    },
    {
      "line": 40,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 41,
      "name": "@market_smoke1"
    },
    {
      "line": 42,
      "name": "@market_smoke_prod"
    },
    {
      "line": 43,
      "name": "@alternative"
    },
    {
      "line": 44,
      "name": "@alternativeproducts_orig_prod_details"
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
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Search product by word \"DRAINAGE POUCH ONE-PIECE ACTIVELIFE OPEN PRE-CUT\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I am on the \"SearchResultPage\" Page and click at item \"SearchViewAlternativeLink\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I must be taken to an \u0027ShopAlternativesPage\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Element \"alternativesTitle\" has value \"Shop Alternatives\" in page \"ShopAlternativesPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "Make sure element \"no_alternatives_present\" is not present in page \"\"",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Make sure elements \"orig_prod_manufacturername,orig_prod_material,orig_prod_title,orig_prod_selectbutton\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Make sure elements \"orig_prod_price,orig_prod_availibity,orig_prod_description,orig_prod_manufacturernumber,orig_prod_product\" are present",
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
  "duration": 22826781342,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 839192606,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 12889855772,
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
  "duration": 28632308900,
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
  "duration": 8649984082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShopAlternativesPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1574502376,
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
  "location": "common_csp.groovy:263"
});
formatter.result({
  "duration": 1070887486,
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
  "duration": 2393999760,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 8327852933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orig_prod_price,orig_prod_availibity,orig_prod_description,orig_prod_manufacturernumber,orig_prod_product",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 131
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 317863514861,
  "error_message": "geb.waiting.WaitTimeoutException: condition did not pass in 300.0 seconds (failed with exception)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:138)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:74)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Page.propertyMissing(Page.groovy:99)\n\tat geb.Page.getProperty(Page.groovy)\n\tat functionlib.Elements.elementexists(Elements.groovy:309)\n\tat steps.common_csp.common_csp$_run_closure26$_closure90.doCall(common_csp.groovy:315)\n\tat ✽.And Make sure elements \"orig_prod_price,orig_prod_availibity,orig_prod_description,orig_prod_manufacturernumber,orig_prod_product\" are present(navigation/Common.feature:55)\nCaused by: Assertion failed: \n\noriginal_product.$(\"div\",class:\"section-cell-dynamic\").$(\"span\",class:\"column-name\",text:\"PRODUCT\").parent().$(\"span\")[1]\n|                |                                     |                                            |        |        |\n|                |                                     []                                           []       []       []\n|                [[[[[RemoteWebDriver: chrome on XP (c5e19bbd640b4f5fbc9633f68623ff55)] -\u003e css selector: div.alt-original-product]] -\u003e css selector: div.section-cell-dynamic], [[[[RemoteWebDriver: chrome on XP (c5e19bbd640b4f5fbc9633f68623ff55)] -\u003e css selector: div.alt-original-product]] -\u003e css selector: div.section-cell-dynamic], [[[[RemoteWebDriver: chrome on XP (c5e19bbd640b4f5fbc9633f68623ff55)] -\u003e css selector: div.alt-original-product]] -\u003e css selector: div.section-cell-dynamic], [[[[RemoteWebDriver: chrome on XP (c5e19bbd640b4f5fbc9633f68623ff55)] -\u003e css selector: div.alt-original-product]] -\u003e css selector: div.section-cell-dynamic]]\npages.ShopAlternativesPage -\u003e original_product: geb.navigator.NonEmptyNavigator\n\n\tat pages.ShopAlternativesPage$__clinit__closure2$_closure16.doCall(ShopAlternativesPage.groovy:29)\n\tat pages.ShopAlternativesPage$__clinit__closure2$_closure16.doCall(ShopAlternativesPage.groovy)\n\tat geb.content.PageContentTemplate.invokeFactory(PageContentTemplate.groovy:97)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy:59)\n\tat geb.content.PageContentTemplate$_create_closure1.doCall(PageContentTemplate.groovy)\n\tat geb.waiting.Wait.waitFor(Wait.groovy:127)\n\tat geb.waiting.Wait$waitFor.call(Unknown Source)\n\tat geb.content.PageContentTemplate.create(PageContentTemplate.groovy:74)\n\tat geb.content.PageContentTemplate.get(PageContentTemplate.groovy:54)\n\tat geb.content.DefaultPageContentSupport.getContent(DefaultPageContentSupport.groovy:42)\n\tat geb.content.PageContentSupport.propertyMissing(PageContentSupport.groovy:39)\n\tat geb.content.PageContentSupport$propertyMissing.call(Unknown Source)\n\tat geb.Page.propertyMissing(Page.groovy:99)\n\tat geb.Page.getProperty(Page.groovy)\n\tat functionlib.Elements.elementexists(Elements.groovy:309)\n\tat steps.common_csp.common_csp$_run_closure26$_closure90.doCall(common_csp.groovy:315)\n\tat steps.common_csp.common_csp$_run_closure26.doCall(common_csp.groovy:310)\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:155)\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:71)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:68)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.runtime.Runtime.run(Runtime.java:121)\n\tat cucumber.runtime.Runtime$run.call(Unknown Source)\n\tat com.cardinalhealth.market.config.CucumberRunner.run(CucumberRunner.groovy:29)\n\tat com.cardinalhealth.market.config.CucumberRunner$run$0.callStatic(Unknown Source)\n\tat com.cardinalhealth.market.config.CucumberRunner.runCucumber(CucumberRunner.groovy:19)\n\tat com.cardinalhealth.market.config.CucumberRunner$runCucumber.call(Unknown Source)\n\tat com.cardinalhealth.market.TestRunner.main(TestRunner.groovy:31)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1005299083,
  "status": "passed"
});
formatter.before({
  "duration": 31792183,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 57,
      "value": "#hardcoded"
    }
  ],
  "line": 64,
  "name": "Catg : Alternatives ; Search for alternative option and Verify details of ALTERNATIVE products",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-alternatives-;-search-for-alternative-option-and-verify-details-of-alternative-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@market_smoke"
    },
    {
      "line": 59,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 60,
      "name": "@market_smoke1"
    },
    {
      "line": 61,
      "name": "@market_smoke_prod"
    },
    {
      "line": 62,
      "name": "@alternative"
    },
    {
      "line": 63,
      "name": "@alternativeproducts_alternative_prod_details"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Search product by word \"DRAINAGE POUCH ONE-PIECE ACTIVELIFE OPEN PRE-CUT\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I am on the \"SearchResultPage\" Page and click at item \"SearchViewAlternativeLink\"",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I must be taken to an \u0027ShopAlternativesPage\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "Element \"alternativesTitle\" has value \"Shop Alternatives\" in page \"ShopAlternativesPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Make sure element \"no_alternatives_present\" is not present in page \"\"",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "Make sure elements \"all_alternatives,each_alternative,each_alternative_image,each_alternative_product,each_alternative_price,each_alternative_availibity,each_alternative_manufacturernumber\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 74,
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
  "duration": 29250592893,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 847614744,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 9711297016,
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
  "duration": 32797646811,
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
  "duration": 13862989809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShopAlternativesPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 896032402,
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
  "location": "common_csp.groovy:263"
});
formatter.result({
  "duration": 951142832,
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
  "duration": 1362020460,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 8230670575,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 6053054301,
  "status": "passed"
});
formatter.after({
  "duration": 1077915,
  "status": "passed"
});
formatter.before({
  "duration": 31469591,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Catg : Compare : Add items to compare not more than 4 items /check for clear all/try",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-add-items-to-compare-not-more-than-4-items-/check-for-clear-all/try",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 77,
      "name": "@market_smoke"
    },
    {
      "line": 78,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 79,
      "name": "@market_smoke1"
    },
    {
      "line": 80,
      "name": "@market_smoke_prod"
    },
    {
      "line": 81,
      "name": "@compare"
    },
    {
      "line": 82,
      "name": "@add_items_to_compare"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Add \"4\" items to compare and make sure compare tray appears",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "The count of element \"CompareTrayItem\" is \u00274\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "Make sure elements \"CompareTrayClearAll\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayItemImage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayItemNum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayItemImage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayItemNum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I must see compare tray item \u00273\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I must see compare tray item \u00273\u0027 has \u0027CompareTrayItemImage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I must see compare tray item \u00273\u0027 has \u0027CompareTrayItemNum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I must see compare tray item \u00273\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I must see compare tray item \u00274\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I must see compare tray item \u00274\u0027 has \u0027CompareTrayItemImage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I must see compare tray item \u00274\u0027 has \u0027CompareTrayItemNum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I must see compare tray item \u00274\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "I must not see compare tray items",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
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
  "duration": 27139861911,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1014554091,
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
  "duration": 32895156232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 493226341,
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
  "location": "common_csp.groovy:349"
});
formatter.result({
  "duration": 860078274,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 5410548792,
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
  "duration": 55817636021,
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
  "duration": 307576862,
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
  "duration": 2926763192,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1333886369,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 815831904,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 989736195,
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
  "duration": 452003822,
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
  "duration": 440509765,
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
  "duration": 445591639,
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
  "duration": 439464815,
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
  "duration": 463761683,
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
  "duration": 397485386,
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
  "duration": 434582318,
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
  "duration": 413199938,
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
  "duration": 2089314166,
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
  "duration": 471189494,
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
  "duration": 816582898,
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
  "duration": 834130267,
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
  "duration": 425325474,
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
  "duration": 436169743,
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
  "duration": 1002911383,
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
  "duration": 473440784,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 6535476432,
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
  "duration": 23018577072,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 5881305147,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8690166757,
  "status": "passed"
});
formatter.after({
  "duration": 1163498,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 123,
  "name": "Catg : Compare : Repeat 4times..(based on item ctn# 1-4)-Compare tray persist after 2nd search/page up/down \u0026 button disabled/enabled as expected",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 117,
      "name": "@market_smoke"
    },
    {
      "line": 118,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 119,
      "name": "@market_smoke1"
    },
    {
      "line": 120,
      "name": "@market_smoke_prod"
    },
    {
      "line": 121,
      "name": "@compare"
    },
    {
      "line": 122,
      "name": "@compare_two_four_items"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "Add \"\u003ccompare_items\u003e\" items to compare and make sure compare tray appears",
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "The count of element \"CompareTrayItem\" is \u0027\u003ccompare_items\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I see that the \"CompareTrayButton\" button is displayed as \u003cenabled_disabled\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "Search product by word \"P50\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I see that the \"CompareTrayButton\" button is displayed as \u003cenabled_disabled\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Navigate to element \"LoadMoreBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "Navigate to element module \"Logo\" on module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I see that the \"CompareTrayButton\" button is displayed as \u003cenabled_disabled\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.examples({
  "line": 151,
  "name": "",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;",
  "rows": [
    {
      "cells": [
        "compare_items",
        "enabled_disabled"
      ],
      "line": 152,
      "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;1"
    },
    {
      "cells": [
        "1",
        "disabled"
      ],
      "line": 153,
      "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;2"
    },
    {
      "cells": [
        "2",
        "enabled"
      ],
      "line": 154,
      "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;3"
    },
    {
      "cells": [
        "3",
        "enabled"
      ],
      "line": 155,
      "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;4"
    },
    {
      "cells": [
        "4",
        "enabled"
      ],
      "line": 156,
      "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29284072,
  "status": "passed"
});
formatter.scenario({
  "line": 153,
  "name": "Catg : Compare : Repeat 4times..(based on item ctn# 1-4)-Compare tray persist after 2nd search/page up/down \u0026 button disabled/enabled as expected",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 118,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 117,
      "name": "@market_smoke"
    },
    {
      "line": 120,
      "name": "@market_smoke_prod"
    },
    {
      "line": 121,
      "name": "@compare"
    },
    {
      "line": 122,
      "name": "@compare_two_four_items"
    },
    {
      "line": 119,
      "name": "@market_smoke1"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "Add \"1\" items to compare and make sure compare tray appears",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "The count of element \"CompareTrayItem\" is \u00271\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I see that the \"CompareTrayButton\" button is displayed as disabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "Search product by word \"P50\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I see that the \"CompareTrayButton\" button is displayed as disabled",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Navigate to element \"LoadMoreBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "Navigate to element module \"Logo\" on module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I see that the \"CompareTrayButton\" button is displayed as disabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 149,
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
  "duration": 23570883098,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1419360143,
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
  "duration": 26159321713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 636856922,
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
  "location": "common_csp.groovy:349"
});
formatter.result({
  "duration": 862165211,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 4612432714,
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
  "duration": 11871826006,
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
  "duration": 296548778,
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
  "duration": 5973752319,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 2225672248,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1096284412,
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
  "duration": 38802896615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 428398419,
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
  "duration": 2963598081,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 3353228309,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 905782601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoadMoreBtn",
      "offset": 21
    }
  ],
  "location": "common_csp.groovy:356"
});
formatter.result({
  "duration": 2823496734,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1744112203,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1662182746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 885129728,
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
  "location": "common_csp.groovy:360"
});
formatter.result({
  "duration": 7105754714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 516773772,
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
  "duration": 3051920739,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 3509626790,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1614459677,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 10079049781,
  "status": "passed"
});
formatter.after({
  "duration": 922678,
  "status": "passed"
});
formatter.before({
  "duration": 30828841,
  "status": "passed"
});
formatter.scenario({
  "line": 154,
  "name": "Catg : Compare : Repeat 4times..(based on item ctn# 1-4)-Compare tray persist after 2nd search/page up/down \u0026 button disabled/enabled as expected",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 118,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 117,
      "name": "@market_smoke"
    },
    {
      "line": 120,
      "name": "@market_smoke_prod"
    },
    {
      "line": 121,
      "name": "@compare"
    },
    {
      "line": 122,
      "name": "@compare_two_four_items"
    },
    {
      "line": 119,
      "name": "@market_smoke1"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "Add \"2\" items to compare and make sure compare tray appears",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "The count of element \"CompareTrayItem\" is \u00272\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "Search product by word \"P50\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Navigate to element \"LoadMoreBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "Navigate to element module \"Logo\" on module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 149,
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
  "duration": 21207088498,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2584429271,
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
  "duration": 26158940604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 2207437339,
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
  "location": "common_csp.groovy:349"
});
formatter.result({
  "duration": 2366950498,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 5662641395,
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
  "duration": 25238550753,
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
  "duration": 314216518,
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
  "duration": 5931776256,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 914905405,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 988643815,
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
  "duration": 31522213930,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 1066458479,
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
  "duration": 3618284839,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1345487435,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 2154895146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoadMoreBtn",
      "offset": 21
    }
  ],
  "location": "common_csp.groovy:356"
});
formatter.result({
  "duration": 2252417627,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 943086028,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 933696980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 2472537480,
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
  "location": "common_csp.groovy:360"
});
formatter.result({
  "duration": 6717057668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 465884105,
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
  "duration": 2444126838,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 3176948170,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1022588803,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9685318410,
  "status": "passed"
});
formatter.after({
  "duration": 664580,
  "status": "passed"
});
formatter.before({
  "duration": 29841515,
  "status": "passed"
});
formatter.scenario({
  "line": 155,
  "name": "Catg : Compare : Repeat 4times..(based on item ctn# 1-4)-Compare tray persist after 2nd search/page up/down \u0026 button disabled/enabled as expected",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 118,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 117,
      "name": "@market_smoke"
    },
    {
      "line": 120,
      "name": "@market_smoke_prod"
    },
    {
      "line": 121,
      "name": "@compare"
    },
    {
      "line": 122,
      "name": "@compare_two_four_items"
    },
    {
      "line": 119,
      "name": "@market_smoke1"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "Add \"3\" items to compare and make sure compare tray appears",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "The count of element \"CompareTrayItem\" is \u00273\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "Search product by word \"P50\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Navigate to element \"LoadMoreBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "Navigate to element module \"Logo\" on module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 149,
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
  "duration": 20687241524,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 915814184,
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
  "duration": 27064087313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 476465489,
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
  "location": "common_csp.groovy:349"
});
formatter.result({
  "duration": 2403535440,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 5242575730,
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
  "duration": 35960196303,
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
  "duration": 251705559,
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
  "duration": 3011188192,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1508933580,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1844832616,
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
  "duration": 31133204074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 455244145,
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
  "duration": 4534902622,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1177625755,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 956929751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoadMoreBtn",
      "offset": 21
    }
  ],
  "location": "common_csp.groovy:356"
});
formatter.result({
  "duration": 2626277060,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1455990969,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 704968414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 862658591,
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
  "location": "common_csp.groovy:360"
});
formatter.result({
  "duration": 6610108439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 362584277,
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
  "duration": 4420561164,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 780400305,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 876106518,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9271906729,
  "status": "passed"
});
formatter.after({
  "duration": 640723,
  "status": "passed"
});
formatter.before({
  "duration": 31548521,
  "status": "passed"
});
formatter.scenario({
  "line": 156,
  "name": "Catg : Compare : Repeat 4times..(based on item ctn# 1-4)-Compare tray persist after 2nd search/page up/down \u0026 button disabled/enabled as expected",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-repeat-4times..(based-on-item-ctn#-1-4)-compare-tray-persist-after-2nd-search/page-up/down-\u0026-button-disabled/enabled-as-expected;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 118,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 117,
      "name": "@market_smoke"
    },
    {
      "line": 120,
      "name": "@market_smoke_prod"
    },
    {
      "line": 121,
      "name": "@compare"
    },
    {
      "line": 122,
      "name": "@compare_two_four_items"
    },
    {
      "line": 119,
      "name": "@market_smoke1"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "Add \"4\" items to compare and make sure compare tray appears",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "The count of element \"CompareTrayItem\" is \u00274\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "Search product by word \"P50\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Navigate to element \"LoadMoreBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "Navigate to element module \"Logo\" on module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 149,
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
  "duration": 21242016306,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1042653302,
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
  "duration": 33820654286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 530287870,
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
  "location": "common_csp.groovy:349"
});
formatter.result({
  "duration": 1120342691,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 6865510628,
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
  "duration": 53577022276,
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
  "duration": 259582562,
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
  "duration": 3912103291,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 814803884,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 852581412,
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
  "duration": 30154419625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 484586959,
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
  "duration": 3357814084,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 953702303,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 2490281880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoadMoreBtn",
      "offset": 21
    }
  ],
  "location": "common_csp.groovy:356"
});
formatter.result({
  "duration": 2857205738,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 2646327586,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 818166346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 973467410,
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
  "location": "common_csp.groovy:360"
});
formatter.result({
  "duration": 9495936692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 543770935,
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
  "duration": 3169548877,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 2244653899,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1782802365,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9578559539,
  "status": "passed"
});
formatter.after({
  "duration": 572461,
  "status": "passed"
});
formatter.before({
  "duration": 24407520,
  "status": "passed"
});
formatter.scenario({
  "line": 164,
  "name": "Catg : Compare : Add items to compare which not remained after log out",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-compare-:-add-items-to-compare-which-not-remained-after-log-out",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 158,
      "name": "@market_smoke"
    },
    {
      "line": 159,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 160,
      "name": "@market_smoke1"
    },
    {
      "line": 161,
      "name": "@market_smoke_prod"
    },
    {
      "line": 162,
      "name": "@compare"
    },
    {
      "line": 163,
      "name": "@compare_tray_notafter_logout"
    }
  ]
});
formatter.step({
  "line": 165,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 166,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "If element \"CompareTrayTitle\" exists than click on \"CompareTrayClearAll\" element",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "I must not see compare tray items",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "Add \"2\" items to compare and make sure compare tray appears",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "The count of element \"CompareTrayItem\" is \u00272\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "I see that the \"CompareTrayButton\" button is displayed as enabled",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "Make sure elements \"CompareTrayTitle\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "Make sure elements \"CompareTrayMessage\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "Make sure elements \"CompareTrayClearAll\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayItemImage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayItemNum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "I must see compare tray item \u00271\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayItemImage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayItemNum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "I must see compare tray item \u00272\u0027 has \u0027CompareTrayRemoveItem\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 187,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "I must not see compare tray items",
  "keyword": "Then "
});
formatter.step({
  "line": 190,
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
  "duration": 22168177226,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 954185258,
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
  "duration": 27128718864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 850928310,
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
  "location": "common_csp.groovy:349"
});
formatter.result({
  "duration": 1277070826,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 5060645067,
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
  "duration": 23428997927,
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
  "duration": 451621274,
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
  "duration": 5824616407,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1777814884,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1874108034,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 852733070,
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
  "duration": 562172548,
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
  "duration": 486337345,
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
  "duration": 814343049,
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
  "duration": 1992747381,
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
  "duration": 472145720,
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
  "duration": 489907989,
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
  "duration": 665358854,
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
  "duration": 496945234,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9032884531,
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
  "duration": 25386958446,
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
  "duration": 31636070464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 436837788,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:761"
});
formatter.result({
  "duration": 5981863703,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 10182933682,
  "status": "passed"
});
formatter.after({
  "duration": 641227,
  "status": "passed"
});
formatter.before({
  "duration": 40614885,
  "status": "passed"
});
formatter.scenario({
  "line": 198,
  "name": "Catg : Search ; Goto search results of selected product, capture item label of first, Search by itemlabel FULL name and verify details on SEARCH results",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-goto-search-results-of-selected-product,-capture-item-label-of-first,-search-by-itemlabel-full-name-and-verify-details-on-search-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 192,
      "name": "@market_smoke"
    },
    {
      "line": 193,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 194,
      "name": "@market_smoke1"
    },
    {
      "line": 195,
      "name": "@market_smoke_prod"
    },
    {
      "line": 196,
      "name": "@search"
    },
    {
      "line": 197,
      "name": "@search_by_full_product_name"
    }
  ]
});
formatter.step({
  "line": 199,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 200,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 204,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "Save value of element \"itemslabel\" to variable \"temp_product_name\"",
  "keyword": "And "
});
formatter.step({
  "line": 206,
  "name": "Search product by word \"temp_product_name\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "Make sure elements \"ResultForm\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 209,
  "name": "Make sure elements \"ResultCategory\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "Make sure elements \"ResultItemList\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 211,
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
  "duration": 18849020640,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 940653201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:273"
});
formatter.result({
  "duration": 36029670554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1285854405,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 57686335741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:334"
});
formatter.result({
  "duration": 899343432,
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
  "duration": 3786781274,
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
  "duration": 32601939199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 503078454,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 2227750145,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1228683130,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1026422235,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 10031085017,
  "status": "passed"
});
formatter.after({
  "duration": 737050,
  "status": "passed"
});
formatter.before({
  "duration": 80373259,
  "status": "passed"
});
formatter.scenario({
  "line": 219,
  "name": "Catg : Search ; Goto search results of selected product, capture item label of first, Search by itemlabel partial name and verify details on SEARCH results",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-goto-search-results-of-selected-product,-capture-item-label-of-first,-search-by-itemlabel-partial-name-and-verify-details-on-search-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 213,
      "name": "@market_smoke1"
    },
    {
      "line": 214,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 215,
      "name": "@market_smoke"
    },
    {
      "line": 216,
      "name": "@market_smoke_prod"
    },
    {
      "line": 217,
      "name": "@search"
    },
    {
      "line": 218,
      "name": "@search_by_partialword"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 221,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 225,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "Save string part of element \"itemslabel\" to variable \"temp_product_name\"",
  "keyword": "And "
});
formatter.step({
  "line": 227,
  "name": "Search product by word \"temp_product_name\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 229,
  "name": "Make sure elements \"ResultForm\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 230,
  "name": "Make sure elements \"ResultCategory\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "Make sure elements \"ResultItemList\" are present",
  "keyword": "And "
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
  "duration": 19170488183,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1066602809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:273"
});
formatter.result({
  "duration": 29105170025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1324796735,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 58932029599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:334"
});
formatter.result({
  "duration": 785723213,
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
  "duration": 1795186101,
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
  "duration": 29279070198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 376817772,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 766310899,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 967418493,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 973798415,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8965450400,
  "status": "passed"
});
formatter.after({
  "duration": 530639,
  "status": "passed"
});
formatter.before({
  "duration": 28970043,
  "status": "passed"
});
formatter.scenario({
  "line": 240,
  "name": "Catg : Search ; Goto search results of selected product, capture material number, Search by material number and verify details on PLP",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-goto-search-results-of-selected-product,-capture-material-number,-search-by-material-number-and-verify-details-on-plp",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 234,
      "name": "@market_smoke1"
    },
    {
      "line": 235,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 236,
      "name": "@market_smoke"
    },
    {
      "line": 237,
      "name": "@market_smoke_prod"
    },
    {
      "line": 238,
      "name": "@search"
    },
    {
      "line": 239,
      "name": "@search_by_material_number"
    }
  ]
});
formatter.step({
  "line": 241,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 242,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 246,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "Save value of element \"material\" to variable \"temp_materialnum\"",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "Save value of element \"manufacturer\" to variable \"temp_manufacturernum\"",
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "Search product by word \"temp_materialnum\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "if \"SearchResultPage\" page returned than hit on item that contains \"temp_materialnum\" and \"temp_manufacturernum\" and get to idp page",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "I am on \"ItemDetailsPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "Make sure elements \"TitleInfo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 253,
  "name": "Make sure elements \"Image_container\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "Make sure elements \"Details\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "Make sure elements \"Description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "Make sure elements \"Specification\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "Make sure elements \"Packaging\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "Make sure elements \"ManufacturerName\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "I verify the Text on \u0027materialnum\u0027 is \u0027temp_materialnum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 260,
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
  "duration": 19111319589,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 934303049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:273"
});
formatter.result({
  "duration": 29435478217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 2248191487,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 55215421620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:334"
});
formatter.result({
  "duration": 803241791,
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
  "duration": 6361836587,
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
  "duration": 4775705400,
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
  "duration": 30350872900,
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
  "location": "common_csp.groovy:442"
});
formatter.result({
  "duration": 152426413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 732373852,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 908412342,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 948526970,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 783137983,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 822768926,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 886187165,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 817730496,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1288525819,
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
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 34909414835,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8771683518,
  "status": "passed"
});
formatter.after({
  "duration": 641951,
  "status": "passed"
});
formatter.before({
  "duration": 29794967,
  "status": "passed"
});
formatter.scenario({
  "line": 268,
  "name": "Catg : Search ; Goto search results of selected product, capture manufacturer number,  Search by manufacturer number and verify details on PLP",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-goto-search-results-of-selected-product,-capture-manufacturer-number,--search-by-manufacturer-number-and-verify-details-on-plp",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 262,
      "name": "@market_smoke1"
    },
    {
      "line": 263,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 264,
      "name": "@market_smoke"
    },
    {
      "line": 265,
      "name": "@market_smoke_prod"
    },
    {
      "line": 266,
      "name": "@search"
    },
    {
      "line": 267,
      "name": "@search_by_manufacturer"
    }
  ]
});
formatter.step({
  "line": 269,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 270,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "There should be image and title attribute displayed for each item",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 275,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "Save value of element \"material\" to variable \"temp_materialnum\"",
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "Save value of element \"manufacturer\" to variable \"temp_manufacturernum\"",
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "Search product by word \"temp_manufacturernum\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 279,
  "name": "if \"SearchResultPage\" page returned than hit on item that contains \"temp_materialnum\" and \"temp_manufacturernum\" and get to idp page",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "I am on \"ItemDetailsPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "I verify the Text on \u0027materialnum\u0027 is \u0027temp_materialnum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "I verify the Text on \u0027manufacturernum\u0027 is \u0027temp_manufacturernum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "Make sure elements \"TitleInfo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 284,
  "name": "Make sure elements \"Image_container\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "Make sure elements \"Details\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "Make sure elements \"Description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "Make sure elements \"Specification\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "Make sure elements \"Packaging\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "Make sure elements \"ManufacturerName\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 290,
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
  "duration": 18617622043,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 950130065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:273"
});
formatter.result({
  "duration": 40011820286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1314339786,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:58"
});
formatter.result({
  "duration": 113079202143,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 61780675178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:334"
});
formatter.result({
  "duration": 887667475,
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
  "duration": 6402044811,
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
  "duration": 4481220146,
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
  "duration": 30766969166,
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
  "location": "common_csp.groovy:442"
});
formatter.result({
  "duration": 154818372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 705810294,
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
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 39109471090,
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
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 30455216970,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 814199670,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 980340899,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 889835574,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 981147836,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1324266701,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 2702222773,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 932827167,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7297866429,
  "status": "passed"
});
formatter.after({
  "duration": 655573,
  "status": "passed"
});
formatter.before({
  "duration": 35004649,
  "status": "passed"
});
formatter.scenario({
  "line": 298,
  "name": "Catg : Search ; TYPEAHEAD CHECK- search results of product, capture item label,Search by itemlabel partial name and verify details on TYPEAHEAD results",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-typeahead-check--search-results-of-product,-capture-item-label,search-by-itemlabel-partial-name-and-verify-details-on-typeahead-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 292,
      "name": "@market_smoke1"
    },
    {
      "line": 293,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 294,
      "name": "@market_smoke"
    },
    {
      "line": 295,
      "name": "@market_smoke_prod"
    },
    {
      "line": 296,
      "name": "@search"
    },
    {
      "line": 297,
      "name": "@search_typeahead_product_name"
    }
  ]
});
formatter.step({
  "line": 299,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 300,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 302,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 303,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 304,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 305,
  "name": "Save string part of element \"itemslabel\" to variable \"temp_product_name\"",
  "keyword": "And "
});
formatter.step({
  "line": 306,
  "name": "Save string part of element \"ResultCategory\" to variable \"temp_category\"",
  "keyword": "And "
});
formatter.step({
  "line": 307,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "Enter Text \"temp_product_name\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "Verify if option with name \"temp_category\" in list \"TypeaheadCategoriesList\" is present on global module",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "Save current url value in variable \"temp_current_url\"",
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "Select option with name \"temp_category\" from \"TypeaheadCategoriesList\" on global module",
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "verify if current url contains \"temp_current_url\"",
  "keyword": "And "
});
formatter.step({
  "line": 313,
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
  "duration": 19625631096,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 3015327134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:273"
});
formatter.result({
  "duration": 32528465636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1301124386,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 55481794315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:334"
});
formatter.result({
  "duration": 2692426311,
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
  "duration": 1218486337,
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
  "duration": 3747858622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 842797765,
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
  "duration": 15192600811,
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
  "location": "searchresultpage.groovy:1221"
});
formatter.result({
  "duration": 10930160393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_current_url",
      "offset": 36
    }
  ],
  "location": "common_csp.groovy:374"
});
formatter.result({
  "duration": 175905033,
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
  "location": "searchresultpage.groovy:1182"
});
formatter.result({
  "duration": 5691400140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp_current_url",
      "offset": 32
    }
  ],
  "location": "common_csp.groovy:380"
});
formatter.result({
  "duration": 278665826,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 11592334398,
  "status": "passed"
});
formatter.after({
  "duration": 587856,
  "status": "passed"
});
formatter.before({
  "duration": 27711146,
  "status": "passed"
});
formatter.scenario({
  "line": 321,
  "name": "Catg : Search ; TYPEAHEAD CHECK- Search results ,capture material num of first, Search by \u0026 select from typeahead material num and verify result returned",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-typeahead-check--search-results-,capture-material-num-of-first,-search-by-\u0026-select-from-typeahead-material-num-and-verify-result-returned",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 315,
      "name": "@market_smoke1"
    },
    {
      "line": 316,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 317,
      "name": "@market_smoke"
    },
    {
      "line": 318,
      "name": "@market_smoke_prod"
    },
    {
      "line": 319,
      "name": "@search"
    },
    {
      "line": 320,
      "name": "@search_typeahead_material"
    }
  ]
});
formatter.step({
  "line": 322,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 323,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 324,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 325,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 326,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 327,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 328,
  "name": "Save whole part of element \"material\" to variable \"temp_materialnum\"",
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "Save value of element \"manufacturer\" to variable \"temp_manufacturernum\"",
  "keyword": "And "
});
formatter.step({
  "line": 330,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 331,
  "name": "Enter Text \"temp_materialnum\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 332,
  "name": "Verify if option with name \"temp_materialnum\" in list \"TypeaheadMaterialsList\" is present on global module",
  "keyword": "And "
});
formatter.step({
  "line": 333,
  "name": "Select option with name \"temp_materialnum\" from \"TypeaheadMaterialsList\" on global module",
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "if \"SearchResultPage\" page returned than hit on item that contains \"temp_materialnum\" and \"temp_manufacturernum\" and get to idp page",
  "keyword": "And "
});
formatter.step({
  "line": 335,
  "name": "I am on \"ItemDetailsPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 336,
  "name": "I verify the Text on \u0027materialnum\u0027 is \u0027temp_materialnum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "Make sure elements \"TitleInfo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 338,
  "name": "Make sure elements \"Image_container\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 339,
  "name": "Make sure elements \"Details\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 340,
  "name": "Make sure elements \"Description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 341,
  "name": "Make sure elements \"Specification\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 342,
  "name": "Make sure elements \"Packaging\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "Make sure elements \"ManufacturerName\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 344,
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
  "duration": 17810051900,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 955087999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:273"
});
formatter.result({
  "duration": 29004109709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1203811874,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 63105819506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:334"
});
formatter.result({
  "duration": 788241065,
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
  "duration": 1099620716,
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
  "duration": 3383298260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 881236894,
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
  "duration": 13570611261,
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
  "location": "searchresultpage.groovy:1221"
});
formatter.result({
  "duration": 6032953673,
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
  "location": "searchresultpage.groovy:1182"
});
formatter.result({
  "duration": 11530464334,
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
  "location": "common_csp.groovy:442"
});
formatter.result({
  "duration": 148269023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 685053809,
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
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 35879243713,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 2950369592,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 760931382,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 688498420,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 698525618,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1251394363,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 978067342,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1359553703,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 11672606656,
  "status": "passed"
});
formatter.after({
  "duration": 1610189,
  "status": "passed"
});
formatter.before({
  "duration": 74883619,
  "status": "passed"
});
formatter.scenario({
  "line": 353,
  "name": "Catg : Search ; TYPEAHEAD CHECK- search results ,capture manufacturer num of first, Search by \u0026 select from typeahead manufacturer num and verify result returned",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-typeahead-check--search-results-,capture-manufacturer-num-of-first,-search-by-\u0026-select-from-typeahead-manufacturer-num-and-verify-result-returned",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 347,
      "name": "@market_smoke1"
    },
    {
      "line": 348,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 349,
      "name": "@market_smoke"
    },
    {
      "line": 350,
      "name": "@market_smoke_prod"
    },
    {
      "line": 351,
      "name": "@search"
    },
    {
      "line": 352,
      "name": "@search_typeahead_manufacturer"
    }
  ]
});
formatter.step({
  "line": 354,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 355,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 356,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 358,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 359,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 360,
  "name": "Save whole part of element \"manufacturer\" to variable \"temp_manufacturernum\"",
  "keyword": "And "
});
formatter.step({
  "line": 361,
  "name": "Save value of element \"material\" to variable \"temp_materialnum\"",
  "keyword": "And "
});
formatter.step({
  "line": 362,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 363,
  "name": "Enter Text \"temp_manufacturernum\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 364,
  "name": "Verify if option with name \"temp_manufacturernum\" in list \"TypeaheadManufacturerList\" is present on global module",
  "keyword": "And "
});
formatter.step({
  "line": 365,
  "name": "Select option with name \"temp_manufacturernum\" from \"TypeaheadManufacturerList\" on global module",
  "keyword": "And "
});
formatter.step({
  "line": 366,
  "name": "if \"SearchResultPage\" page returned than hit on item that contains \"temp_materialnum\" and \"temp_manufacturernum\" and get to idp page",
  "keyword": "And "
});
formatter.step({
  "line": 368,
  "name": "I am on \"ItemDetailsPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 369,
  "name": "I verify the Text on \u0027manufacturernum\u0027 is \u0027temp_manufacturernum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 370,
  "name": "Make sure elements \"TitleInfo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 371,
  "name": "Make sure elements \"Image_container\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 372,
  "name": "Make sure elements \"Details\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 373,
  "name": "Make sure elements \"Description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 374,
  "name": "Make sure elements \"Specification\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 375,
  "name": "Make sure elements \"Packaging\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 376,
  "name": "Make sure elements \"ManufacturerName\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 377,
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
  "duration": 22834351531,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 875032003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:273"
});
formatter.result({
  "duration": 32398972071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1363939094,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 60076170771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:334"
});
formatter.result({
  "duration": 815911643,
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
  "duration": 1156274702,
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
  "duration": 3611914915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 917027495,
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
  "duration": 11760447326,
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
  "location": "searchresultpage.groovy:1221"
});
formatter.result({
  "duration": 7050890119,
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
  "location": "searchresultpage.groovy:1182"
});
formatter.result({
  "duration": 24401388664,
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
  "location": "common_csp.groovy:442"
});
formatter.result({
  "duration": 183905245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 707076554,
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
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 32624277071,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 766497978,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 844188615,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 814169444,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 771311451,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 784462494,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 802041759,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 934435148,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 13837459355,
  "status": "passed"
});
formatter.after({
  "duration": 804473,
  "status": "passed"
});
formatter.before({
  "duration": 31862207,
  "status": "passed"
});
formatter.scenario({
  "line": 385,
  "name": "Catg : My Account ; Access My Account options",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-my-account-;-access-my-account-options",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 379,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 380,
      "name": "@market_smoke1"
    },
    {
      "line": 381,
      "name": "@market_smoke_prod"
    },
    {
      "line": 382,
      "name": "@market_smoke"
    },
    {
      "line": 383,
      "name": "@my_account"
    },
    {
      "line": 384,
      "name": "@My_Account_options"
    }
  ]
});
formatter.step({
  "line": 386,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 387,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 388,
  "name": "Make sure element \"welcomeUser\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 389,
  "name": "Make sure element \"welcomeUser_Username\" value is not null in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "I click element \u0027MyAccount\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "Make sure element \"myAccountdropdown\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 392,
  "name": "Make sure element \"myAccount_changeaccount\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 393,
  "name": "Make sure element \"myAccount_logout\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 394,
  "name": "I click element \u0027myAccount_changeaccount\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 395,
  "name": "the system must display an account selection section on the page as Select Account,Sold To,Ship To,Search Sold To\u0027s or Ship To\u0027s,View All Accounts,Cancel,Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 396,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.step({
  "line": 397,
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
  "duration": 20025973005,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 5649850958,
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
  "duration": 11966561328,
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
  "duration": 27484025031,
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
  "duration": 17583272514,
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
  "duration": 1379030555,
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
  "duration": 1894381936,
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
  "duration": 1798337498,
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
  "duration": 6287996929,
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
  "location": "changeaccountdropdown.groovy:23"
});
formatter.result({
  "duration": 9616103200,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 10673263340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cardinalhealth.com/login",
      "offset": 32
    }
  ],
  "location": "common_csp.groovy:380"
});
formatter.result({
  "duration": 512768353,
  "status": "passed"
});
formatter.after({
  "duration": 581270,
  "status": "passed"
});
formatter.before({
  "duration": 32972461,
  "status": "passed"
});
formatter.scenario({
  "line": 405,
  "name": "Catg : My Account ; My profile info in My Account options",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-my-account-;-my-profile-info-in-my-account-options",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 399,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 400,
      "name": "@market_smoke1"
    },
    {
      "line": 401,
      "name": "@market_smoke_prod"
    },
    {
      "line": 402,
      "name": "@market_smoke"
    },
    {
      "line": 403,
      "name": "@my_account"
    },
    {
      "line": 404,
      "name": "@My_Account_profile_info"
    }
  ]
});
formatter.step({
  "line": 406,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 407,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 408,
  "name": "I click element \u0027MyAccount\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 409,
  "name": "I click element \u0027Profileinfo\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 410,
  "name": "I am on \"UserProfilePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 411,
  "name": "Make sure element \"profile_FirstName\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 412,
  "name": "Make sure element \"profile_LastName\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 413,
  "name": "Make sure element \"profile_PhoneNumber1\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "Make sure element \"profile_PhoneNumber2\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "Make sure element \"profile_PhoneNumber3\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 416,
  "name": "Make sure element \"profile_PhoneExtension\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 417,
  "name": "Make sure element \"profile_EmailAddress\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 418,
  "name": "Make sure element \"profile_SaveChangesButton\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 419,
  "name": "Make sure element \"profile_user_pass_security\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 420,
  "name": "Make sure element \"profile_username\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 421,
  "name": "Make sure element \"profile_password\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 422,
  "name": "Make sure element \"profile_security\" is present in page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 423,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 424,
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
  "duration": 19629086407,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 5241966934,
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
  "duration": 11402746730,
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
  "duration": 13349161048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UserProfilePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 2496641200,
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
  "duration": 1306519704,
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
  "duration": 2296080946,
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
  "duration": 1555055954,
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
  "duration": 1357180368,
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
  "duration": 1494755309,
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
  "duration": 1215961176,
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
  "duration": 2407652515,
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
  "duration": 3165377162,
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
  "duration": 2042886714,
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
  "duration": 5300514359,
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
  "duration": 5967282939,
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
  "duration": 3060067700,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 7230858510,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8051295945,
  "status": "passed"
});
formatter.after({
  "duration": 399404,
  "status": "passed"
});
formatter.before({
  "duration": 26336158,
  "status": "passed"
});
formatter.scenario({
  "line": 432,
  "name": "Catg : My Account ; TEST CASE WILL FAIL- NEW REQUIREMENT, MKT-5645 CREATED for EDITING PROFILE - Edit My profile options",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-my-account-;-test-case-will-fail--new-requirement,-mkt-5645-created-for-editing-profile---edit-my-profile-options",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 426,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 427,
      "name": "@market_smoke1"
    },
    {
      "line": 428,
      "name": "@market_smoke_prod"
    },
    {
      "line": 429,
      "name": "@market_smoke"
    },
    {
      "line": 430,
      "name": "@my_account"
    },
    {
      "line": 431,
      "name": "@My_Account_profile_edit"
    }
  ]
});
formatter.step({
  "line": 433,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 434,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 435,
  "name": "I click element \u0027MyAccount\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 436,
  "name": "I click element \u0027Profileinfo\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 437,
  "name": "I am on \"UserProfilePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 439,
  "name": "Save value of element \"profile_FirstName\" to variable \"temp_firstname\"",
  "keyword": "And "
});
formatter.step({
  "line": 440,
  "name": "Save value of element \"profile_LastName\" to variable \"temp_lastname\"",
  "keyword": "And "
});
formatter.step({
  "line": 441,
  "name": "Save value of element \"profile_PhoneNumber1\" to variable \"temp_phonenumber1\"",
  "keyword": "And "
});
formatter.step({
  "line": 442,
  "name": "Save value of element \"profile_PhoneNumber2\" to variable \"temp_phonenumber2\"",
  "keyword": "And "
});
formatter.step({
  "line": 443,
  "name": "Save value of element \"profile_PhoneNumber2\" to variable \"temp_phonenumber2\"",
  "keyword": "And "
});
formatter.step({
  "line": 444,
  "name": "Save value of element \"profile_PhoneExtension\" to variable \"temp_phoneextension\"",
  "keyword": "And "
});
formatter.step({
  "line": 445,
  "name": "Save value of element \"profile_EmailAddress\" to variable \"temp_emailaddress\"",
  "keyword": "And "
});
formatter.step({
  "line": 447,
  "name": "I Enter Text \"profile_FirstName\" in Text Box field \"profile_FirstName\"",
  "keyword": "And "
});
formatter.step({
  "line": 448,
  "name": "I Enter Text \"profile_LastName\" in Text Box field \"profile_LastName\"",
  "keyword": "And "
});
formatter.step({
  "line": 449,
  "name": "I Enter Text \"213\" in Text Box field \"profile_PhoneNumber1\"",
  "keyword": "And "
});
formatter.step({
  "line": 450,
  "name": "I Enter Text \"456\" in Text Box field \"profile_PhoneNumber2\"",
  "keyword": "And "
});
formatter.step({
  "line": 451,
  "name": "I Enter Text \"2341\" in Text Box field \"profile_PhoneNumber3\"",
  "keyword": "And "
});
formatter.step({
  "line": 452,
  "name": "I Enter Text \"231\" in Text Box field \"profile_PhoneExtension\"",
  "keyword": "And "
});
formatter.step({
  "line": 453,
  "name": "I Enter Text \"test@test.com\" in Text Box field \"profile_EmailAddress\"",
  "keyword": "And "
});
formatter.step({
  "line": 454,
  "name": "I click at Item \u0027profile_SaveChangesButton\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 455,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 456,
  "name": "I click element \u0027MyAccount\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 457,
  "name": "I click element \u0027Profileinfo\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 458,
  "name": "I am on \"UserProfilePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 459,
  "name": "I verify the Text on \u0027profile_FirstName\u0027 is \u0027profile_FirstName\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 460,
  "name": "I verify the Text on \u0027profile_LastName\u0027 is \u0027profile_LastName\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 461,
  "name": "I verify the Text on \u0027profile_PhoneNumber1\u0027 is \u0027213\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 462,
  "name": "I verify the Text on \u0027profile_PhoneNumber2\u0027 is \u0027456\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 463,
  "name": "I verify the Text on \u0027profile_PhoneNumber2\u0027 is \u00272341\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 464,
  "name": "I verify the Text on \u0027profile_PhoneExtension\u0027 is \u0027231\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 465,
  "name": "I verify the Text on \u0027profile_EmailAddress\u0027 is \u0027test@test.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 467,
  "name": "I Enter Text \"temp_firstname\" in Text Box field \"profile_FirstName\"",
  "keyword": "And "
});
formatter.step({
  "line": 468,
  "name": "I Enter Text \"temp_lastname\" in Text Box field \"profile_LastName\"",
  "keyword": "And "
});
formatter.step({
  "line": 469,
  "name": "I Enter Text \"temp_phonenumber1\" in Text Box field \"213\"",
  "keyword": "And "
});
formatter.step({
  "line": 470,
  "name": "I Enter Text \"temp_phonenumber2\" in Text Box field \"456\"",
  "keyword": "And "
});
formatter.step({
  "line": 471,
  "name": "I Enter Text \"temp_phonenumber3\" in Text Box field \"2341\"",
  "keyword": "And "
});
formatter.step({
  "line": 472,
  "name": "I Enter Text \"temp_phoneextension\" in Text Box field \"231\"",
  "keyword": "And "
});
formatter.step({
  "line": 473,
  "name": "I Enter Text \"temp_emailaddress\" in Text Box field \"test@test.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 474,
  "name": "I click at Item \u0027profile_SaveChangesButton\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 475,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 476,
  "name": "I click element \u0027MyAccount\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 477,
  "name": "I click element \u0027Profileinfo\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 478,
  "name": "I am on \"UserProfilePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 479,
  "name": "I verify the Text on \u0027profile_FirstName\u0027 is \u0027temp_firstname\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "I verify the Text on \u0027profile_LastName\u0027 is \u0027temp_lastname\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 481,
  "name": "I verify the Text on \u0027profile_PhoneNumber1\u0027 is \u0027temp_phonenumber1\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 482,
  "name": "I verify the Text on \u0027profile_PhoneNumber2\u0027 is \u0027temp_phonenumber2\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 483,
  "name": "I verify the Text on \u0027profile_PhoneNumber3\u0027 is \u0027temp_phonenumber3\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 484,
  "name": "I verify the Text on \u0027profile_PhoneExtension\u0027 is \u0027temp_phoneextension\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 485,
  "name": "I verify the Text on \u0027profile_EmailAddress\u0027 is \u0027temp_emailaddress\u0027",
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
  "duration": 18849406432,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 4953379540,
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
  "duration": 18638709348,
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
  "duration": 14442792730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UserProfilePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 915502588,
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
  "duration": 4567208571,
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
  "duration": 7279991048,
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
  "duration": 5352512820,
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
  "duration": 5370017732,
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
  "duration": 3865706297,
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
  "duration": 6011275990,
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
  "duration": 4151495569,
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
  "duration": 6635830820,
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
  "duration": 5005081651,
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
  "duration": 4467444283,
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
  "duration": 4972714443,
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
  "duration": 6037579626,
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
  "duration": 5023753431,
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
  "duration": 5787635543,
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
  "duration": 6286691270,
  "error_message": "java.lang.AssertionError: pages.UserProfilePage -\u003e profile_SaveChangesButton: geb.navigator.NonEmptyNavigator cannot be interacted and hence cannot be clicked ,exception ...org.openqa.selenium.ElementNotVisibleException: element not interactable\n  (Session info: chrome\u003d70.0.3538.67)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 881 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027dab47b40-08ca-4cd1-510f-56cd62d0ee79\u0027, ip: \u002710.254.0.114\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.14.62-65.117.amzn1.x86_64\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49749}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, takesScreenshot\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a), userDataDir\u003dC:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\scoped_dir3036_14758}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, hasMetadata\u003dtrue, handlesAlerts\u003dtrue, databaseEnabled\u003dfalse, version\u003d70.0.3538.67, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, webdriver.remote.sessionid\u003dc5e19bbd640b4f5fbc9633f68623ff55, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: c5e19bbd640b4f5fbc9633f68623ff55. Expression: false\n\tat functionlib.Elements.click_on_page(Elements.groovy:367)\n\tat functionlib.Elements.click_on_page(Elements.groovy)\n\tat functionlib.Elements$click_on_page$2.call(Unknown Source)\n\tat steps.itemdetails.itemdetailspage$_run_closure7.doCall(itemdetailspage.groovy:66)\n\tat ✽.And I click at Item \u0027profile_SaveChangesButton\u0027(navigation/Common.feature:454)\n",
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
  "location": "common_csp.groovy:364"
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
  "location": "common_csp.groovy:389"
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
  "location": "common_csp.groovy:389"
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
  "location": "common_csp.groovy:389"
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
  "location": "common_csp.groovy:389"
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
  "location": "common_csp.groovy:389"
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
  "location": "common_csp.groovy:389"
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
  "location": "common_csp.groovy:389"
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
  "status": "skipped"
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
  "location": "common_csp.groovy:364"
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
      "val": "temp_firstname",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:389"
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
      "val": "temp_lastname",
      "offset": 44
    }
  ],
  "location": "common_csp.groovy:389"
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
      "val": "temp_phonenumber1",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:389"
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
      "val": "temp_phonenumber2",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:389"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "profile_PhoneNumber3",
      "offset": 22
    },
    {
      "val": "temp_phonenumber3",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:389"
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
      "val": "temp_phoneextension",
      "offset": 50
    }
  ],
  "location": "common_csp.groovy:389"
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
      "val": "temp_emailaddress",
      "offset": 48
    }
  ],
  "location": "common_csp.groovy:389"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 890636920,
  "status": "passed"
});
formatter.before({
  "duration": 36219811,
  "status": "passed"
});
formatter.scenario({
  "line": 493,
  "name": "Catg : Check Availability ; Hit on Check availibity on search results and items details page and check current status",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-check-availability-;-hit-on-check-availibity-on-search-results-and-items-details-page-and-check-current-status",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 487,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 488,
      "name": "@market_smoke1"
    },
    {
      "line": 489,
      "name": "@market_smoke_prod"
    },
    {
      "line": 490,
      "name": "@market_smoke"
    },
    {
      "line": 491,
      "name": "@check_availability"
    },
    {
      "line": 492,
      "name": "@check_availablity_search_idp"
    }
  ]
});
formatter.step({
  "line": 494,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 495,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 496,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 497,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 498,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 499,
  "name": "Verify items list details related to product",
  "keyword": "And "
});
formatter.step({
  "line": 500,
  "name": "I should see the Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 501,
  "name": "I click at Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 502,
  "name": "I should see the Item \u0027availabilitymsg\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 503,
  "name": "I click at Item \u0027itemslabel\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 504,
  "name": "I must be taken to an \u0027ItemDetailsPage\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 505,
  "name": "I should see the Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 506,
  "name": "I click at Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 507,
  "name": "I should see the Item \u0027availabilitymsg\u0027",
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
  "duration": 25907590580,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 926031414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:273"
});
formatter.result({
  "duration": 44544890160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1142422152,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 72849407465,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:421"
});
formatter.result({
  "duration": 7004592261,
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
  "duration": 1410191131,
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
  "duration": 33549886725,
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
  "duration": 814357043,
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
  "duration": 29790712558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1236317910,
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
  "duration": 997656492,
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
  "duration": 29231816129,
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
  "duration": 1008770378,
  "status": "passed"
});
formatter.after({
  "duration": 583157,
  "status": "passed"
});
formatter.before({
  "duration": 27206525,
  "status": "passed"
});
formatter.scenario({
  "line": 514,
  "name": "Catg : Search ; Typeahead -Item detail page when hit on item and category landing when hit on category",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-typeahead--item-detail-page-when-hit-on-item-and-category-landing-when-hit-on-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 509,
      "name": "@typeahead_itemdetail"
    },
    {
      "line": 510,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 511,
      "name": "@market_smoke1"
    },
    {
      "line": 512,
      "name": "@market_smoke_prod"
    },
    {
      "line": 513,
      "name": "@market_smoke"
    }
  ]
});
formatter.step({
  "line": 515,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 516,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 517,
  "name": "Enter Text \"glov\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 518,
  "name": "I click \u0027ONCE\u0027 on 1 item from the \u0027TypeaheadProductsList\u0027 in tablet header navigation",
  "keyword": "And "
});
formatter.step({
  "line": 519,
  "name": "I must be taken to an \u0027ItemDetailsPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 520,
  "name": "I am on \"ItemDetailsPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 521,
  "name": "Make sure elements \"TitleInfo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 522,
  "name": "Make sure elements \"Image_container\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 523,
  "name": "Make sure elements \"Details\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 524,
  "name": "Make sure elements \"Description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 525,
  "name": "Make sure elements \"Specification\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 526,
  "name": "Make sure elements \"Packaging\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 527,
  "name": "Make sure elements \"ManufacturerName\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 528,
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
  "duration": 23825221511,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 793920259,
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
  "duration": 16009938759,
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
  "duration": 43312502689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 2539335188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 744498667,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 843236631,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 924812540,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 888433444,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 739624763,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1431777411,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 796631586,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1469296440,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 11137194785,
  "status": "passed"
});
formatter.after({
  "duration": 642415,
  "status": "passed"
});
formatter.before({
  "duration": 36270157,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 530,
      "value": "#SE12"
    }
  ],
  "line": 536,
  "name": "Catg : Search ; Typeahead - category landing when hit on category for searched product",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-search-;-typeahead---category-landing-when-hit-on-category-for-searched-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 531,
      "name": "@typeahead_categorylanding"
    },
    {
      "line": 532,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 533,
      "name": "@market_smoke1"
    },
    {
      "line": 534,
      "name": "@market_smoke_prod"
    },
    {
      "line": 535,
      "name": "@market_smoke"
    }
  ]
});
formatter.step({
  "line": 537,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 538,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 539,
  "name": "Enter Text \"glov\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 540,
  "name": "I click \u0027ONCE\u0027 on 1 item from the \u0027TypeaheadCategoriesList\u0027 in tablet header navigation",
  "keyword": "And "
});
formatter.step({
  "line": 541,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 542,
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
  "duration": 19422414170,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 892318514,
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
  "duration": 16909742951,
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
  "duration": 24272381086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 958922177,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9119073558,
  "status": "passed"
});
formatter.after({
  "duration": 766025,
  "status": "passed"
});
formatter.before({
  "duration": 35079400,
  "status": "passed"
});
formatter.scenario({
  "line": 547,
  "name": "Catg : Order Search ; Search orders placed in last few days by filter and searching by PO number",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-order-search-;-search-orders-placed-in-last-few-days-by-filter-and-searching-by-po-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 544,
      "name": "@ordersearch_filter"
    },
    {
      "line": 545,
      "name": "@market_smoke1"
    },
    {
      "line": 546,
      "name": "@market_smoke"
    }
  ]
});
formatter.step({
  "line": 548,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 549,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 550,
  "name": "Delete any existing products in cart",
  "keyword": "And "
});
formatter.step({
  "line": 551,
  "name": "Search product by word \"surgical gloves\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 552,
  "name": "Select the product that is available",
  "keyword": "And "
});
formatter.step({
  "line": 553,
  "name": "Add the product to cart and update the amount to meet minimum requirements",
  "keyword": "And "
});
formatter.step({
  "line": 554,
  "name": "Checkout and get order Number",
  "keyword": "When "
});
formatter.step({
  "line": 555,
  "name": "Get status and ship to details of order and me sure it is \"In Process\"",
  "keyword": "Then "
});
formatter.step({
  "line": 556,
  "name": "Get into details of order and make sure order is correct",
  "keyword": "And "
});
formatter.step({
  "line": 557,
  "name": "Go back to search page from invoice details",
  "keyword": "And "
});
formatter.step({
  "line": 558,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 559,
  "name": "I click element \u0027orderManagement\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 560,
  "name": "I click element \u0027ordersLink\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 561,
  "name": "I am on \"OrderSearchPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 562,
  "name": "I click on \u0027orderSearchAllShiptos\u0027 element",
  "keyword": "And "
});
formatter.step({
  "line": 563,
  "name": "I click on \u0027filterResultsApplyBtn\u0027 element",
  "keyword": "And "
});
formatter.step({
  "line": 564,
  "name": "Make sure elements \"numberOfResultsMessage,searchResultsTable,resultsHeader,orderSearchResults\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 565,
  "name": "Make sure elements \"poNumberHeader,orderNumberHeader,buyerNameHeader,orderMethodHeader,orderTotalHeader,shipToHeader,dateHeader,statusHeader\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 566,
  "name": "Save value of element \"ponumbers\" to variable \"temp_ponumber\"",
  "keyword": "And "
});
formatter.step({
  "line": 567,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 568,
  "name": "I click element \u0027orderManagement\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 569,
  "name": "I click element \u0027ordersLink\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 570,
  "name": "I am on \"OrderSearchPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 571,
  "name": "Select \"PO Number\" from drop down \"Search_Orders\" on page \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 572,
  "name": "I Enter Text \"temp_ponumber\" in Text Box field \"searchByNumber\"",
  "keyword": "And "
});
formatter.step({
  "line": 573,
  "name": "I click on \u0027searchButton\u0027 element",
  "keyword": "And "
});
formatter.step({
  "line": 574,
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
  "duration": 19212489740,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 933568633,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 13747655669,
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
  "duration": 30928973833,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:293"
});
formatter.result({
  "duration": 58341662501,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:340"
});
formatter.result({
  "duration": 67488528131,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:348"
});
formatter.result({
  "duration": 18977340809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "In Process",
      "offset": 59
    }
  ],
  "location": "shoppingcartpage.groovy:355"
});
formatter.result({
  "duration": 29910933899,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:403"
});
formatter.result({
  "duration": 15024033317,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:408"
});
formatter.result({
  "duration": 8035978103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 896819005,
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
  "duration": 9486702177,
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
  "duration": 10328714125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OrderSearchPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 945252452,
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
  "duration": 6279334344,
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
  "duration": 4435658518,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 6670502205,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 11371488320,
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
  "duration": 18426787655,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1648917040,
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
  "duration": 9669621242,
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
  "duration": 18306558476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OrderSearchPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 689775815,
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
  "location": "common_csp.groovy:467"
});
formatter.result({
  "duration": 5325913457,
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
  "duration": 7704391404,
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
  "duration": 5899951459,
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
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 133756250090,
  "status": "passed"
});
formatter.after({
  "duration": 574445,
  "status": "passed"
});
formatter.before({
  "duration": 37469340,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 576,
      "value": "#in process"
    }
  ],
  "line": 582,
  "name": "Catg : Barcode ; Verify Barcode option",
  "description": "",
  "id": "market-smoke-test-cases;catg-:-barcode-;-verify-barcode-option",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 577,
      "name": "@barcode"
    },
    {
      "line": 578,
      "name": "@market_smoke_prod1"
    },
    {
      "line": 579,
      "name": "@market_smoke1"
    },
    {
      "line": 580,
      "name": "@market_smoke_prod"
    },
    {
      "line": 581,
      "name": "@market_smoke"
    }
  ]
});
formatter.step({
  "line": 583,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 584,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 585,
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
  "duration": 29867956381,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 845193085,
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
  "duration": 7470129605,
  "status": "passed"
});
formatter.after({
  "duration": 447803,
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
  "duration": 30709111,
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
  "duration": 27193860661,
  "status": "passed"
});
formatter.after({
  "duration": 919680,
  "status": "passed"
});
formatter.before({
  "duration": 37876456,
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
  "duration": 23600272173,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 906661198,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 10804681084,
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
  "duration": 6799236393,
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
  "location": "common_csp.groovy:431"
});
formatter.result({
  "duration": 4005353734,
  "status": "passed"
});
formatter.after({
  "duration": 581650,
  "status": "passed"
});
formatter.before({
  "duration": 37523223,
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
  "duration": 27636928555,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1010913477,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8695353235,
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
  "duration": 8423583755,
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
  "location": "common_csp.groovy:431"
});
formatter.result({
  "duration": 4652100707,
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
  "duration": 2260368650,
  "status": "passed"
});
formatter.after({
  "duration": 580604,
  "status": "passed"
});
formatter.before({
  "duration": 29072735,
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
  "duration": 22292015640,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9991292928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 1308625306,
  "status": "passed"
});
formatter.after({
  "duration": 498748,
  "status": "passed"
});
formatter.before({
  "duration": 37859737,
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
  "duration": 21005066559,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2595025968,
  "status": "passed"
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
  "duration": 3436072802,
  "status": "passed"
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
  "duration": 1748552549,
  "status": "passed"
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
  "duration": 816193630,
  "status": "passed"
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
  "duration": 885573539,
  "status": "passed"
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
  "duration": 4355819545,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7326996238,
  "status": "passed"
});
formatter.after({
  "duration": 633974,
  "status": "passed"
});
formatter.before({
  "duration": 35438326,
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
  "duration": 23589935531,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1156874736,
  "status": "passed"
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
  "duration": 6518290944,
  "status": "passed"
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
  "duration": 2313699052,
  "status": "passed"
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
  "duration": 3528867738,
  "status": "passed"
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
  "duration": 2012461777,
  "status": "passed"
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
  "duration": 1519401293,
  "status": "passed"
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
  "duration": 1729422068,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 10187743617,
  "status": "passed"
});
formatter.after({
  "duration": 498230,
  "status": "passed"
});
formatter.before({
  "duration": 30037510,
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
  "duration": 21399019943,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 894247928,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 13477649323,
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
  "duration": 50460633926,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:293"
});
formatter.result({
  "duration": 61407941695,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:340"
});
formatter.result({
  "duration": 70613673028,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:348"
});
formatter.result({
  "duration": 16879086094,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7694786151,
  "status": "passed"
});
formatter.after({
  "duration": 872197,
  "status": "passed"
});
formatter.before({
  "duration": 41828320,
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
  "duration": 23644341236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "In Process",
      "offset": 59
    }
  ],
  "location": "shoppingcartpage.groovy:355"
});
formatter.result({
  "duration": 32853685701,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:403"
});
formatter.result({
  "duration": 13647893789,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:408"
});
formatter.result({
  "duration": 5604767938,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8786652190,
  "status": "passed"
});
formatter.after({
  "duration": 600027,
  "status": "passed"
});
formatter.before({
  "duration": 36848227,
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
  "duration": 22490448387,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 823411527,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 12332130721,
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
  "duration": 36741368238,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:293"
});
formatter.result({
  "duration": 58167138016,
  "status": "passed"
});
formatter.after({
  "duration": 535076,
  "status": "passed"
});
formatter.before({
  "duration": 36610901,
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
  "duration": 23321846098,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 3112187555,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 57162684007,
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
  "duration": 38454176958,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:293"
});
formatter.result({
  "duration": 58399738132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 483001495,
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
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 8421833761,
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
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 8498742318,
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
  "duration": 46683587062,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:293"
});
formatter.result({
  "duration": 59816008560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 453938016,
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
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 7930643147,
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
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 6012765694,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7105221660,
  "status": "passed"
});
formatter.after({
  "duration": 574452,
  "status": "passed"
});
formatter.before({
  "duration": 29599534,
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
  "name": "Make sure elements \"cartsummary,CartSummaryItemCount,CartSummaryItemTotal,checkoutButton,poNumberField,pohelptext,POMemo,poMemoField,department,PackingSlipMessage,PackingSliplabel,packingSlipField\" are present",
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
  "duration": 24414987394,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1031946675,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:12"
});
formatter.result({
  "duration": 44830784245,
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
  "duration": 38881624202,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:293"
});
formatter.result({
  "duration": 19003546784,
  "error_message": "java.lang.AssertionError:  There are NO PRODUCTS that are AVAILABLE, for searched criteria. Expression: false\n\tat steps.shoppingcart.shoppingcartpage$_run_closure53.doCall(shoppingcartpage.groovy:335)\n\tat ✽.And Select the product that is available(navigation/Common_2.feature:158)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "shoppingcartpage.groovy:293"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "status": "skipped"
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
  "location": "common_csp.groovy:389"
});
formatter.result({
  "status": "skipped"
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
  "location": "common_csp.groovy:389"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ShoppingCartPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "cartsummary,CartSummaryItemCount,CartSummaryItemTotal,checkoutButton,poNumberField,pohelptext,POMemo,poMemoField,department,PackingSlipMessage,PackingSliplabel,packingSlipField",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 202
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "status": "skipped"
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "status": "skipped"
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
  "location": "common_csp.groovy:308"
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
      "val": "delete",
      "offset": 35
    },
    {
      "val": "delete-link cta-link primary disabled",
      "offset": 47
    }
  ],
  "location": "common_csp.groovy:483"
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
  "location": "common_csp.groovy:483"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 950831700,
  "status": "passed"
});
formatter.before({
  "duration": 30713277,
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
  "duration": 26672310466,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 2700472186,
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
  "duration": 42732123962,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8277495076,
  "status": "passed"
});
formatter.after({
  "duration": 728818,
  "status": "passed"
});
formatter.before({
  "duration": 32646865,
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
  "duration": 22633244406,
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
  "duration": 35207202202,
  "status": "passed"
});
formatter.match({
  "location": "searchresultpage.groovy:51"
});
formatter.result({
  "duration": 248928780,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1544732223,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 10325726541,
  "status": "passed"
});
formatter.after({
  "duration": 542045,
  "status": "passed"
});
formatter.before({
  "duration": 29930605,
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
  "duration": 20879228486,
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
  "duration": 35553770659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 502668341,
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
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 8079530002,
  "status": "passed"
});
formatter.after({
  "duration": 492137,
  "status": "passed"
});
formatter.before({
  "duration": 32012580,
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
  "duration": 26633762638,
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
  "duration": 28330154256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 593775979,
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
  "duration": 11847911933,
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
  "duration": 13083920428,
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
  "duration": 12081049958,
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
  "duration": 8866213066,
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
  "duration": 13675712925,
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
  "duration": 15018912799,
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
  "duration": 9977041989,
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
  "duration": 10030636723,
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
  "duration": 16577398391,
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
  "duration": 11023514185,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9890337984,
  "status": "passed"
});
formatter.after({
  "duration": 627303,
  "status": "passed"
});
formatter.before({
  "duration": 34606201,
  "status": "passed"
});
formatter.scenario({
  "line": 241,
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
      "name": "@market_smoke_prod2"
    },
    {
      "line": 237,
      "name": "@market_smoke"
    },
    {
      "line": 238,
      "name": "@market_smoke_prod"
    },
    {
      "line": 239,
      "name": "@search"
    },
    {
      "line": 240,
      "name": "@item_details_default"
    }
  ]
});
formatter.step({
  "line": 242,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 243,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 247,
  "name": "I am on the \"PlpPage\" Page",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "Save whole part of element \"manufacturer\" to variable \"temp_manufacturernum\"",
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "Save value of element \"material\" to variable \"temp_materialnum\"",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "I am on \"BasePage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "Enter Text \"temp_manufacturernum\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "I click element \u0027SearchBarSubmit\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "if \"SearchResultPage\" page returned than hit on item that contains \"temp_materialnum\" and \"temp_manufacturernum\" and get to idp page",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "I am on \"ItemDetailsPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "Make sure elements \"Logo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 256,
  "name": "Make sure elements \"SearchBox\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 257,
  "name": "Make sure elements \"SearchBarSubmit\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 258,
  "name": "Make sure elements \"SoldToNum\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 259,
  "name": "Make sure elements \"SoldToName\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 260,
  "name": "Make sure elements \"ShipToNum\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 261,
  "name": "Make sure elements \"ShipToName\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 262,
  "name": "Make sure elements \"changeAccountLink\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 263,
  "name": "Make sure elements \"PrintBtn\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 264,
  "name": "I verify the Text on \u0027manufacturernum\u0027 is \u0027temp_manufacturernum\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "Make sure elements \"TitleInfo\" are present",
  "keyword": "Then "
});
formatter.step({
  "line": 266,
  "name": "Make sure elements \"Image_container\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "Make sure elements \"Details\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "Make sure elements \"Description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "Make sure elements \"product_description_label\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "Make sure elements \"product_description\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "Make sure elements \"features_benefits_label\" are present",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "Make sure elements \"features_benefits\" are present",
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
  "duration": 19391834753,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 1089084580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:273"
});
formatter.result({
  "duration": 31973360522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 941261548,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 65507047842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PlpPage",
      "offset": 13
    }
  ],
  "location": "common_csp.groovy:334"
});
formatter.result({
  "duration": 1348826643,
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
  "duration": 1269838380,
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
  "duration": 4110052817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 1071665177,
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
  "duration": 12760738230,
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
  "duration": 34577908377,
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
  "location": "common_csp.groovy:442"
});
formatter.result({
  "duration": 233668933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 650361498,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 762246602,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1915135709,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 3170323330,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 4343684305,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 2791593326,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 4077746782,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 5828215287,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1919055257,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 749263025,
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
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 32629754054,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 721216358,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1644479797,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 896388348,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1138620473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product_description_label",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 51
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1049629866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product_description",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 45
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1127009600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "features_benefits_label",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 49
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 2569044481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "features_benefits",
      "offset": 20
    },
    {
      "val": "present",
      "offset": 43
    }
  ],
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 963080859,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 2432628310,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 855593861,
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
  "location": "common_csp.groovy:308"
});
formatter.result({
  "duration": 1995962108,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 10199412386,
  "status": "passed"
});
formatter.after({
  "duration": 556927,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 284,
  "name": "Catg : Global Header/Navigation ; Click/Tap Change Account - use view all accounts option",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---use-view-all-accounts-option",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 278,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 279,
      "name": "@market_smoke2"
    },
    {
      "line": 280,
      "name": "@market_smoke"
    },
    {
      "line": 281,
      "name": "@market_smoke_prod"
    },
    {
      "line": 282,
      "name": "@global_header"
    },
    {
      "line": 283,
      "name": "@all_account_view"
    }
  ]
});
formatter.step({
  "line": 285,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 286,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 287,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 288,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "the system must display an account selection section on the page as \u003cselectAccountLabel\u003e,\u003csoldToLabel\u003e,\u003cshipToLabel\u003e,\u003csearchBoxDefaultText\u003e,\u003cviewAllAccountsLink\u003e,\u003ccancelLink\u003e,\u003cchangeAccountButtonLabel\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 290,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 291,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 292,
  "name": "Log out of Market application",
  "keyword": "And "
});
formatter.examples({
  "line": 294,
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
      "line": 295,
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
      "line": 296,
      "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---use-view-all-accounts-option;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40538687,
  "status": "passed"
});
formatter.scenario({
  "line": 296,
  "name": "Catg : Global Header/Navigation ; Click/Tap Change Account - use view all accounts option",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---use-view-all-accounts-option;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 280,
      "name": "@market_smoke"
    },
    {
      "line": 281,
      "name": "@market_smoke_prod"
    },
    {
      "line": 279,
      "name": "@market_smoke2"
    },
    {
      "line": 283,
      "name": "@all_account_view"
    },
    {
      "line": 278,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 282,
      "name": "@global_header"
    }
  ]
});
formatter.step({
  "line": 285,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 286,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 287,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 288,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 289,
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
  "line": 290,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 291,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 292,
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
  "duration": 22020384759,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 5714136733,
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
  "duration": 1305806622,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 12089167073,
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
  "location": "changeaccountdropdown.groovy:23"
});
formatter.result({
  "duration": 8711576946,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 11244352973,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 902325598,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 11919130035,
  "status": "passed"
});
formatter.after({
  "duration": 429979,
  "status": "passed"
});
formatter.before({
  "duration": 27609154,
  "status": "passed"
});
formatter.scenario({
  "line": 305,
  "name": "Catg : Global Header/Navigation ; Get Products details and verify Product landing and Category Landing Page",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-get-products-details-and-verify-product-landing-and-category-landing-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 298,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 299,
      "name": "@market_smoke2"
    },
    {
      "line": 300,
      "name": "@market_smoke"
    },
    {
      "line": 301,
      "name": "@market_smoke_prod"
    },
    {
      "line": 302,
      "name": "@global_header"
    },
    {
      "line": 303,
      "name": "@getpoductdetails"
    },
    {
      "line": 304,
      "name": "@products_plp_clp"
    }
  ]
});
formatter.step({
  "line": 306,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 307,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "I must be taken to an \u0027CategoryLandingPage\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "There should be image and title attribute displayed for each item",
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "Reach Product Landing Page",
  "keyword": "When "
});
formatter.step({
  "line": 312,
  "name": "Verify items list details related to product",
  "keyword": "And "
});
formatter.step({
  "line": 313,
  "name": "I should see the Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 314,
  "name": "I click at Item \u0027checkavailibity\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "I should see the Item \u0027availabilitymsg\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 316,
  "name": "I click at Item \u0027itemslabel\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 317,
  "name": "I must be taken to an \u0027ItemDetailsPage\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 318,
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
  "duration": 21182210242,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 811477928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:273"
});
formatter.result({
  "duration": 34230391479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CategoryLandingPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 2662922766,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:58"
});
formatter.result({
  "duration": 106691033037,
  "status": "passed"
});
formatter.match({
  "location": "productnavmenudisplayflag.groovy:30"
});
formatter.result({
  "duration": 63457657558,
  "status": "passed"
});
formatter.match({
  "location": "shoppingcartpage.groovy:421"
});
formatter.result({
  "duration": 6490076234,
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
  "duration": 1202543633,
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
  "duration": 27085057417,
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
  "duration": 2577961577,
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
  "duration": 32333986731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1161143338,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 12915454707,
  "status": "passed"
});
formatter.after({
  "duration": 664302,
  "status": "passed"
});
formatter.before({
  "duration": 33593114,
  "status": "passed"
});
formatter.scenario({
  "line": 326,
  "name": "Catg : Global Header/Navigation ; Click/Tap Change Account - CHANGE account to new ship and sold to account",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-change-account---change-account-to-new-ship-and-sold-to-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 320,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 321,
      "name": "@market_smoke2"
    },
    {
      "line": 322,
      "name": "@market_smoke"
    },
    {
      "line": 323,
      "name": "@market_smoke_prod"
    },
    {
      "line": 324,
      "name": "@global_header"
    },
    {
      "line": 325,
      "name": "@account_change"
    }
  ]
});
formatter.step({
  "line": 327,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 328,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 329,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 330,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 331,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 332,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 333,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 335,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 336,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "I verify that \u0027SoldToNum\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 338,
  "name": "I verify that \u0027ShipToNum\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 339,
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
  "duration": 20010639148,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 5259887083,
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
  "duration": 1218685592,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 11169317506,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 12189036792,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 1071725229,
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
  "duration": 5050910933,
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
  "duration": 7222121424,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 8584293029,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 16861308466,
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
  "duration": 15927720621,
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
  "duration": 14225542172,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 7913934305,
  "status": "passed"
});
formatter.after({
  "duration": 465074,
  "status": "passed"
});
formatter.before({
  "duration": 26307524,
  "status": "passed"
});
formatter.scenario({
  "line": 347,
  "name": "Catg : Global Header/Navigation ; Search by sold to account and make sure search results rows contains that number",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-search-by-sold-to-account-and-make-sure-search-results-rows-contains-that-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 341,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 342,
      "name": "@market_smoke2"
    },
    {
      "line": 343,
      "name": "@market_smoke"
    },
    {
      "line": 344,
      "name": "@market_smoke_prod"
    },
    {
      "line": 345,
      "name": "@global_header"
    },
    {
      "line": 346,
      "name": "@searchby_soldto_verifyreturned_changeACCOUNT"
    }
  ]
});
formatter.step({
  "line": 348,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 349,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 350,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 351,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 355,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 356,
  "name": "I click on element \"cancelButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 358,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 359,
  "name": "Enter Text \"temp_newsoldto\" in Text Box field \"search\" in module \"changeAccountDropDown\"",
  "keyword": "And "
});
formatter.step({
  "line": 360,
  "name": "I click on element \"searchButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 361,
  "name": "Make sure the search results contains the account \"number\" that is being searched for",
  "keyword": "And "
});
formatter.step({
  "line": 363,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 364,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 365,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 366,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 367,
  "name": "I verify that \u0027SoldToNum\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 368,
  "name": "I verify that \u0027ShipToNum\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 369,
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
  "duration": 20548114323,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 6760772517,
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
  "duration": 4401016914,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 11291290827,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 10056855993,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 849052271,
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
  "duration": 4149542726,
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
  "duration": 4176167939,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 9525604508,
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
  "duration": 1348646757,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 14442890460,
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
  "duration": 12123212527,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 10285635968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "number",
      "offset": 51
    }
  ],
  "location": "changeaccountdropdown.groovy:96"
});
formatter.result({
  "duration": 174693963043,
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
  "duration": 5066867450,
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
  "duration": 4794090171,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 7971916665,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 24964481246,
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
  "duration": 17893064726,
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
  "duration": 12461436406,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 11435213646,
  "status": "passed"
});
formatter.after({
  "duration": 514540,
  "status": "passed"
});
formatter.before({
  "duration": 34580921,
  "status": "passed"
});
formatter.scenario({
  "line": 377,
  "name": "Catg : Global Header/Navigation ; Search by sold to NAME and make sure search results rows contains that name",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-search-by-sold-to-name-and-make-sure-search-results-rows-contains-that-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 371,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 372,
      "name": "@market_smoke2"
    },
    {
      "line": 373,
      "name": "@market_smoke"
    },
    {
      "line": 374,
      "name": "@market_smoke_prod"
    },
    {
      "line": 375,
      "name": "@global_header"
    },
    {
      "line": 376,
      "name": "@searchby_soldto_verifyreturned_changeNAME"
    }
  ]
});
formatter.step({
  "line": 378,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 379,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 380,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 381,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 382,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 383,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 384,
  "name": "Save value of element \"firstnonselectedrowSoldToName\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "Save value of element \"firstnonselectedrowShipToName\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 386,
  "name": "I click on element \"cancelButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 387,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 388,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 389,
  "name": "Enter Text \"temp_newsoldto\" in Text Box field \"search\" in module \"changeAccountDropDown\"",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "I click on element \"searchButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "Make sure the search results contains the account \"name\" that is being searched for",
  "keyword": "And "
});
formatter.step({
  "line": 393,
  "name": "Save value of element \"firstnonselectedrowSoldToName\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 394,
  "name": "Save value of element \"firstnonselectedrowShipToName\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 395,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 396,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 398,
  "name": "I verify that \u0027SoldToName\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 399,
  "name": "I verify that \u0027ShipToName\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 400,
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
  "duration": 18569056938,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 6142668103,
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
  "duration": 1188560939,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 8145422513,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 8322300040,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 828409767,
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
  "duration": 12036403785,
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
  "duration": 19113785448,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 8172887866,
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
  "duration": 1057143897,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 13030212093,
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
  "duration": 11327003088,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 10547367570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 51
    }
  ],
  "location": "changeaccountdropdown.groovy:96"
});
formatter.result({
  "duration": 166995062915,
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
  "duration": 11713218028,
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
  "duration": 17605101782,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 10574201555,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 20645171964,
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
  "duration": 17394900509,
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
  "duration": 14602801125,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9085946956,
  "status": "passed"
});
formatter.after({
  "duration": 434146,
  "status": "passed"
});
formatter.before({
  "duration": 30176332,
  "status": "passed"
});
formatter.scenario({
  "line": 408,
  "name": "Catg : Global Header/Navigation ; Search by SHIP to account and make sure search results rows contains that SHIPTO ACT number",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-search-by-ship-to-account-and-make-sure-search-results-rows-contains-that-shipto-act-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 402,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 403,
      "name": "@market_smoke2"
    },
    {
      "line": 404,
      "name": "@market_smoke"
    },
    {
      "line": 405,
      "name": "@market_smoke_prod"
    },
    {
      "line": 406,
      "name": "@global_header"
    },
    {
      "line": 407,
      "name": "@searchby_Shipto_verifyreturned_changeACCOUNT"
    }
  ]
});
formatter.step({
  "line": 409,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 410,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 411,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 412,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 413,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 416,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 417,
  "name": "I click on element \"cancelButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 418,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 419,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 420,
  "name": "Enter Text \"temp_newshipto\" in Text Box field \"search\" in module \"changeAccountDropDown\"",
  "keyword": "And "
});
formatter.step({
  "line": 421,
  "name": "I click on element \"searchButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 422,
  "name": "Make sure the search results contains the account \"number\" that is being searched for",
  "keyword": "And "
});
formatter.step({
  "line": 424,
  "name": "Save value of element \"firstnonselectedrowSoldToValue\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 425,
  "name": "Save value of element \"firstnonselectedrowShipToValue\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 426,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 427,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 428,
  "name": "I verify that \u0027SoldToNum\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 429,
  "name": "I verify that \u0027ShipToNum\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 430,
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
  "duration": 30871024239,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 6304986677,
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
  "duration": 1099245129,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 10095998795,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 10223029542,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 1835350046,
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
  "duration": 3088325553,
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
  "duration": 4233787122,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 8933875383,
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
  "duration": 2048961040,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 12590879898,
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
  "duration": 8519405046,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 8079891392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "number",
      "offset": 51
    }
  ],
  "location": "changeaccountdropdown.groovy:96"
});
formatter.result({
  "duration": 3034257044,
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
  "duration": 3710794922,
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
  "duration": 2822049396,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 8926279767,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 16993618488,
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
  "duration": 15015485243,
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
  "duration": 17398481457,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9867054401,
  "status": "passed"
});
formatter.after({
  "duration": 488719,
  "status": "passed"
});
formatter.before({
  "duration": 41996935,
  "status": "passed"
});
formatter.scenario({
  "line": 438,
  "name": "Catg : Global Header/Navigation ; Search by ship to NAME and make sure search results rows contains that ship to name",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-search-by-ship-to-name-and-make-sure-search-results-rows-contains-that-ship-to-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 432,
      "name": "@market_smoke2"
    },
    {
      "line": 433,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 434,
      "name": "@market_smoke"
    },
    {
      "line": 435,
      "name": "@market_smoke_prod"
    },
    {
      "line": 436,
      "name": "@global_header"
    },
    {
      "line": 437,
      "name": "@searchby_shipto_verifyreturned_changeNAME"
    }
  ]
});
formatter.step({
  "line": 439,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 440,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 441,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 442,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 443,
  "name": "I click on element \"viewAllAccounts\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 444,
  "name": "I must see display all Sold to/Ship To user associated accounts",
  "keyword": "And "
});
formatter.step({
  "line": 445,
  "name": "Save value of element \"firstnonselectedrowSoldToName\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 446,
  "name": "Save value of element \"firstnonselectedrowShipToName\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 447,
  "name": "I click on element \"cancelButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 448,
  "name": "I must see the Change Account link as Change Account",
  "keyword": "Then "
});
formatter.step({
  "line": 449,
  "name": "I have the change account option opened/expanded",
  "keyword": "And "
});
formatter.step({
  "line": 450,
  "name": "Enter Text \"temp_newshipto\" in Text Box field \"search\" in module \"changeAccountDropDown\"",
  "keyword": "And "
});
formatter.step({
  "line": 451,
  "name": "I click on element \"searchButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 452,
  "name": "Make sure the search results contains the account \"name\" that is being searched for",
  "keyword": "And "
});
formatter.step({
  "line": 454,
  "name": "Save value of element \"firstnonselectedrowSoldToName\" in module \"changeAccountDropDown\" to variable \"temp_newsoldto\"",
  "keyword": "And "
});
formatter.step({
  "line": 455,
  "name": "Save value of element \"firstnonselectedrowShipToName\" in module \"changeAccountDropDown\" to variable \"temp_newshipto\"",
  "keyword": "And "
});
formatter.step({
  "line": 456,
  "name": "I click on element \"accountslistnonselectedrow\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "When "
});
formatter.step({
  "line": 457,
  "name": "I click on element \"changeButton\" in module \"changeAccountDropDown\" on tablet header",
  "keyword": "And "
});
formatter.step({
  "line": 458,
  "name": "Wait for 5000 ms",
  "keyword": "And "
});
formatter.step({
  "line": 459,
  "name": "I verify that \u0027SoldToName\u0027 displayed with \u0027temp_newsoldto\u0027 text",
  "keyword": "Then "
});
formatter.step({
  "line": 460,
  "name": "I verify that \u0027ShipToName\u0027 displayed with \u0027temp_newshipto\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 461,
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
  "duration": 36003624677,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 5277609411,
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
  "duration": 1095333579,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 9157967734,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 13528070540,
  "status": "passed"
});
formatter.match({
  "location": "viewallaccounts.groovy:42"
});
formatter.result({
  "duration": 1420987911,
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
  "duration": 18342222311,
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
  "duration": 14936443003,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 7107246534,
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
  "duration": 2850171442,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountcancellink.groovy:13"
});
formatter.result({
  "duration": 10640883894,
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
  "duration": 10733574972,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 10177240607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 51
    }
  ],
  "location": "changeaccountdropdown.groovy:96"
});
formatter.result({
  "duration": 2074964387,
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
  "duration": 20881642913,
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
  "duration": 12632236996,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 10933987257,
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
  "location": "common_csp.groovy:524"
});
formatter.result({
  "duration": 18345687491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5000",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:346"
});
formatter.result({
  "duration": 5000519698,
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
  "duration": 13900281325,
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
  "duration": 18149436584,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9947176537,
  "status": "passed"
});
formatter.after({
  "duration": 819792,
  "status": "passed"
});
formatter.before({
  "duration": 36323025,
  "status": "passed"
});
formatter.scenario({
  "line": 469,
  "name": "Catg : Global Header/Navigation ; Sold to account details",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-sold-to-account-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 463,
      "name": "@market_smoke2"
    },
    {
      "line": 464,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 465,
      "name": "@market_smoke"
    },
    {
      "line": 466,
      "name": "@market_smoke_prod"
    },
    {
      "line": 467,
      "name": "@global_header"
    },
    {
      "line": 468,
      "name": "@soldto_shipto_account_details"
    }
  ]
});
formatter.step({
  "line": 470,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 471,
  "name": "I view the Global Header",
  "keyword": "When "
});
formatter.step({
  "line": 472,
  "name": "I click element \u0027SoldTo\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 473,
  "name": "Make sure element \"SoldToName\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 474,
  "name": "Make sure element \"SoldToName2\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 475,
  "name": "Make sure element \"SoldToAddress1\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 476,
  "name": "Make sure element \"SoldToState\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 477,
  "name": "Make sure element \"SoldToBaseValue\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 479,
  "name": "I click element \u0027ShipTo\u0027 on globalHeader",
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "Make sure element \"ShipToName\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 481,
  "name": "Make sure element \"ShipToName2\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 482,
  "name": "Make sure element \"ShipToAddress1\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 483,
  "name": "Make sure element \"ShipToState\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 484,
  "name": "Make sure element \"ShipToBaseValue\" is present in page \"global\"",
  "keyword": "And "
});
formatter.step({
  "line": 485,
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
  "duration": 19719678113,
  "status": "passed"
});
formatter.match({
  "location": "changeaccountlink.groovy:12"
});
formatter.result({
  "duration": 5295439302,
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
  "duration": 10670896613,
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
  "duration": 4551339694,
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
  "duration": 5916967909,
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
  "duration": 5789480021,
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
  "duration": 4829740822,
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
  "duration": 4533398018,
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
  "duration": 7339287677,
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
  "duration": 5819877641,
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
  "duration": 5524085692,
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
  "duration": 5993442859,
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
  "duration": 3360692649,
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
  "duration": 4489953882,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8778497680,
  "status": "passed"
});
formatter.after({
  "duration": 372604,
  "status": "passed"
});
formatter.before({
  "duration": 27754378,
  "status": "passed"
});
formatter.scenario({
  "line": 493,
  "name": "Catg : Global Header/Navigation ; Click/Tap logo to go to Home page",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-global-header/navigation-;-click/tap-logo-to-go-to-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 487,
      "name": "@market_smoke2"
    },
    {
      "line": 488,
      "name": "@market_smoke_prod2"
    },
    {
      "line": 489,
      "name": "@market_smoke"
    },
    {
      "line": 490,
      "name": "@market_smoke_prod"
    },
    {
      "line": 491,
      "name": "@global_header"
    },
    {
      "line": 492,
      "name": "@logo_homepage"
    }
  ]
});
formatter.step({
  "line": 494,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 495,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 496,
  "name": "I select 0 item from products menu",
  "keyword": "And "
});
formatter.step({
  "line": 497,
  "name": "I click on \u0027Logo\u0027 in Tablet Header",
  "keyword": "When "
});
formatter.step({
  "line": 498,
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
  "duration": 20380562620,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 988314996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "categorynavigation.groovy:273"
});
formatter.result({
  "duration": 36628942198,
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
  "duration": 5262448672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BasePage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 494196941,
  "status": "passed"
});
formatter.after({
  "duration": 329886,
  "status": "passed"
});
formatter.before({
  "duration": 29235724,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 500,
      "value": "##hardcoded"
    },
    {
      "line": 501,
      "value": "##not in prod as no customer item # data"
    }
  ],
  "line": 506,
  "name": "Catg : Search ; Search by Customer Item Number",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-search-;-search-by-customer-item-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 502,
      "name": "@search_customer_item"
    },
    {
      "line": 503,
      "name": "@market_smoke2"
    },
    {
      "line": 504,
      "name": "@market_smoke"
    },
    {
      "line": 505,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 507,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 508,
  "name": "I am on the Header",
  "keyword": "And "
});
formatter.step({
  "line": 509,
  "name": "Enter Text \"106097\" in Text Box field \"SearchBox\" in module \"globalHeader\"",
  "keyword": "And "
});
formatter.step({
  "line": 510,
  "name": "I click \u0027ONCE\u0027 on 1 item from the \u0027TypeaheadCustomerItems\u0027 in tablet header navigation",
  "keyword": "Then "
});
formatter.step({
  "line": 511,
  "name": "I must be taken to an \u0027ItemDetailsPage\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 512,
  "name": "I verify the Text on \u0027customernum\u0027 is \u0027106097\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 513,
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
  "duration": 23058988398,
  "status": "passed"
});
formatter.match({
  "location": "basepage.groovy:11"
});
formatter.result({
  "duration": 987573984,
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
  "duration": 19480463180,
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
  "duration": 39981527946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ItemDetailsPage",
      "offset": 23
    }
  ],
  "location": "basepage.groovy:186"
});
formatter.result({
  "duration": 1373109299,
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
  "location": "common_csp.groovy:389"
});
formatter.result({
  "duration": 47713691123,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 8424505474,
  "status": "passed"
});
formatter.after({
  "duration": 393078,
  "status": "passed"
});
formatter.before({
  "duration": 28560824,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 515,
      "value": "##hardcoded"
    },
    {
      "line": 516,
      "value": "##no data in prod which has customer item # and value link and core"
    }
  ],
  "line": 521,
  "name": "Catg : Search ; Verify details of each item returned",
  "description": "",
  "id": "market-smoke-test-cases-second-scenarios;catg-:-search-;-verify-details-of-each-item-returned",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 517,
      "name": "@market_smoke2"
    },
    {
      "line": 518,
      "name": "@market_smoke"
    },
    {
      "line": 519,
      "name": "@search"
    },
    {
      "line": 520,
      "name": "@item_valuelink_core_contract_customer"
    }
  ]
});
formatter.step({
  "line": 522,
  "name": "I am on CAH Market site \u0027BasePage\u0027 page and logged in with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 523,
  "name": "Search product by word \"30503\" and get list of related products",
  "keyword": "And "
});
formatter.step({
  "line": 524,
  "name": "I am on \"SearchResultPage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 525,
  "name": "For row item with \"MaterialNum\" as \"30503-015A\" verify elements \"valuelink,core,customernum,contractlabel,contractnumber\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 526,
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
  "duration": 20547188601,
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
  "duration": 45184713686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchResultPage",
      "offset": 9
    }
  ],
  "location": "common_csp.groovy:364"
});
formatter.result({
  "duration": 602024846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MaterialNum",
      "offset": 19
    },
    {
      "val": "30503-015A",
      "offset": 36
    },
    {
      "val": "valuelink,core,customernum,contractlabel,contractnumber",
      "offset": 65
    }
  ],
  "location": "searchresultpage.groovy:1256"
});
formatter.result({
  "duration": 13793179725,
  "status": "passed"
});
formatter.match({
  "location": "sctrachpad.groovy:77"
});
formatter.result({
  "duration": 9105136580,
  "status": "passed"
});
formatter.after({
  "duration": 339797,
  "status": "passed"
});
});