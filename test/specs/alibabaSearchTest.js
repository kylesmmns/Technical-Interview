const SearchPageObjects = require('../pageobjects/searchBarObjects');
let saveSearchItem; 
describe('as a user I would like to load alibaba.com, choose a popular search ite, and validate its search result', () => {
    before('i should be able to load the webapge and see the popular search item',() => {
        SearchPageObjects.open('https://www.alibaba.com/')    
        saveSearchItem = SearchPageObjects.searchSelection()
        //console.log(saveSearchItem)
        //console.log(browser.getUrl())
    })
    it('the popular search item shold be present on the URL', () => {      
        expect(browser.getUrl()).to.include(saveSearchItem);
    });
});


