import { testPage } from "cypress/variables/testPage";

describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/');
      cy.url().should('contains', 'all');
    })
    it('check nav', () => {
      testPage.clickItem(testPage.navOpenID);
      cy.url().should('contains', 'open');
      testPage.clickItem(testPage.navDoneID);
      cy.url().should('contains', 'done');
      testPage.clickItem(testPage.navAllID);
      cy.url().should('contains', 'all');
    })
    it('check List Table Load from LocalStorage', () => {
      cy.visit('/');
      window.localStorage.setItem(testPage.LocalStorageName, testPage.LocalStorageData);
      testPage.getItem(testPage.tableID + ' ' + testPage.tableContentID, testPage.LocalDataContent);
      testPage.getItem(testPage.tableID + ' .mat-row', testPage.LocalDataContent).contains(testPage.tableTypeID, testPage.LocalDataType);
    })
    it('check List Form test', () => {
      testPage.clickItem(testPage.formTypeID);
      testPage.clickSelectorItem(testPage.inputDataType);
      testPage.typeInput(testPage.formContentID, testPage.inputDataContent);
      
      // reset
      testPage.clickItem(testPage.formResetButtonID);
      testPage.getItem(testPage.formTypeID, '');
      testPage.getItem(testPage.formContentID, '');
      
      // add
      testPage.clickItem(testPage.formTypeID);
      testPage.clickSelectorItem(testPage.inputDataType);
      testPage.typeInput(testPage.formContentID, testPage.inputDataContent);
      testPage.clickItem(testPage.formAddButtonID);

      testPage.getItem(testPage.tableID + ' ' + testPage.tableContentID, testPage.inputDataContent);
      testPage.getItem(testPage.tableID + ' .mat-row', testPage.inputDataContent).contains(testPage.tableTypeID, testPage.inputDataType);
      
      // Check `Data B` can be seen at page `All`
      testPage.clickItem(testPage.navAllID);
      cy.url().should('contains', 'all');
      testPage.checkNewItem(testPage.inputDataContent, true);
      
      // Check `Data B` can be seen at page `Open`
      testPage.clickItem(testPage.navOpenID);
      cy.url().should('contains', 'open');
      testPage.checkNewItem(testPage.inputDataContent, true);
      
      // Check `Data B` can't be seen at page `Done`
      testPage.clickItem(testPage.navDoneID);
      cy.url().should('contains', 'done');
      testPage.checkNewItem(testPage.inputDataContent, false);

      // Back to page All
      testPage.clickItem(testPage.navAllID);
      cy.url().should('contains', 'all');

      // Click Data B checkbox to set Done
      testPage.getItem(testPage.tableID + ' ' + testPage.tableContentID, testPage.inputDataContent).parents(".mat-table > mat-row").children(testPage.tableIsDoneID).click();
      
      // Check `Data B` can be seen at page `All`
      testPage.clickItem(testPage.navAllID);
      cy.url().should('contains', 'all');
      testPage.checkNewItem(testPage.inputDataContent, true);
      
      // Check `Data B` can't be seen at page `Open`
      testPage.clickItem(testPage.navOpenID);
      cy.url().should('contains', 'open');
      testPage.checkNewItem(testPage.inputDataContent, false);
      
      // Check `Data B` can be seen at page `Done`
      testPage.clickItem(testPage.navDoneID);
      cy.url().should('contains', 'done');
      testPage.checkNewItem(testPage.inputDataContent, true);

      // Back to page All
      testPage.clickItem(testPage.navAllID);
      cy.url().should('contains', 'all');

      // Remove `Data B`
      testPage.getItem(testPage.tableID + ' ' + testPage.tableContentID, testPage.inputDataContent).parents(".mat-table > mat-row").children(testPage.tableDeleteID).click();
            
      // Check `Data B` can't be seen at page `All`
      testPage.clickItem(testPage.navAllID);
      cy.url().should('contains', 'all');
      testPage.checkNewItem(testPage.inputDataContent, false);
      
      // Check `Data B` can't be seen at page `Open`
      testPage.clickItem(testPage.navOpenID);
      cy.url().should('contains', 'open');
      testPage.checkNewItem(testPage.inputDataContent, false);
      
      // Check `Data B` can't be seen at page `Done`
      testPage.clickItem(testPage.navDoneID);
      cy.url().should('contains', 'done');
      testPage.checkNewItem(testPage.inputDataContent, false);
    })
  })