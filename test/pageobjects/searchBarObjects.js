const Page = require('./page');
class SearchPageObjects extends Page {   
    get popularSearchTab () {return $$('.ui-searchbar-keyword')[0]}
    get popularSearchObject1 () { return $('.ui-header-static-item')}
    get popularSearchObject2 () { return $$('.ui-header-static-item')[1]}
    
    searchSelection () {
        let saveSearchItem;
        this.popularSearchTab.click()
        this.popularSearchObject1.waitForDisplayed()
        saveSearchItem = this.popularSearchObject2.getText()
        if ( saveSearchItem.split(" ").length > 1 ) {
            $(".virus-faq__learn-more").waitForDisplayed()
            return saveSearchItem = saveSearchItem.split(" ").join("_")
        }
        this.popularSearchObject2.click()
        $(".virus-faq__learn-more").waitForDisplayed()
        return saveSearchItem
    }

    open (url) {
        return super.open(url);
    }
}
module.exports = new SearchPageObjects();
