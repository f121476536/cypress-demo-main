export class testPage {
    // Dom
    static readonly navAllID = "#nav-all";
    static readonly navOpenID = "#nav-open";
    static readonly navDoneID = "#nav-done";
    static readonly formID = "form";

    static readonly formTypeID = "[formcontrolname='type']";
    static readonly formContentID = "[formcontrolname='content']";
    static readonly formAddButtonID = "#create-button";
    static readonly formResetButtonID = "#reset-button";
    
    static readonly tableID = "app-todolist-table";
    static readonly tableContentID = ".cdk-column-content";
    static readonly tableTypeID = ".cdk-column-type";
    static readonly tableIsDoneID = ".cdk-column-isDone";
    static readonly tableDeleteID = ".cdk-column-delete";


    // Input Content
    static readonly LocalStorageName = 'listData';
    static readonly LocalStorageData = '[{"type":"personal","content":"Data A","id":"gV89O11Cjo9U","timestamp":1625215778099,"isDone":false}]';
    static readonly LocalDataType = "Personal";
    static readonly LocalDataContent = "Data A";
    static readonly inputDataType = "Work";
    static readonly inputDataContent = "Data B";

    static getItem(id: string, contains?: string): Cypress.Chainable<any> {
        if (contains) {
            return cy.contains(id, contains);
        }
        return cy.get(id);
    }

    //Click item by tag/#id/.class/tag.class/tag#id
    static clickItem(id: string, contains?: string, isforce?: boolean) {
        if (isforce === undefined) {
            isforce = false
        }
        if (contains) {
            this.getItem(id, contains).click({ force: isforce });
        } else {
            this.getItem(id).click({ force: isforce });
        }
    }

    static clickSelectorItem(option: string) {
        cy.contains('mat-option', option).click({force: true});
    }

    static typeInput(dom: string, text: string, doBlur?: boolean) {
        let input = "{selectall}" + text;

        if(doBlur){
          this.getItem(dom).type(input, {force: true, delay: 0}).blur();
        } else{
          this.getItem(dom).type(input, {force: true, delay: 0});
        }
    }

    static checkNewItem(name: string, isExit: boolean) {
        if (isExit) {
            cy.contains(this.tableContentID, name).should('exist');
        } else {
            cy.get('body').then(($body: any) => {
                if ($body.find(this.tableContentID).length > 0) {
                    cy.contains(this.tableContentID, name).should('not.exist');
                }
            });
        }
    }

}