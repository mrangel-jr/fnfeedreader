/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TEST: Check all feeds and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has URL', function () {
            expect(allFeeds).toBeDefined();
            allFeeds.forEach(element => {
                expect(element.url).toBeDefined();
                expect(element.url).not.toEqual('');
            });
        })


        /* TEST: Check all feeds and ensures it has a name defined
         * and that the name is not empty.
         */

        it('has name property and it\'s not empty', function () {
            expect(allFeeds).toBeDefined();
            allFeeds.forEach(element => {
                expect(element.name).toBeDefined();
                expect(element.name).not.toEqual('');
            });
        })
    });


    describe('The menu', function () {

        /*TEST: Check HTML and CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('Initiate menu hidden', function () {
            let initHidden = $('body').hasClass('menu-hidden');
            expect(initHidden).toBe(true);
        });

        /* TEST: Check two expectations of menu: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('The menu is visible', function () {
            let menu = document.querySelector(".menu-icon-link");
            $(menu).click();
            expect(document.body.classList.contains('menu-hidden')).toBe(false);
            $(menu).click();
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });

    });

    describe('Initial Entries', function () {
        /* 
         * TEST: Check if exists at least
         * a single .entry element within the .feed container.
         */
        const originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 2500000;
        beforeEach(function (done) {
            loadFeed(3, done);
        });

        it('Check if exists elements', function (done) {
            let item = $('.feed .entry');
            expect(item.length).toBeGreaterThan(0);
            done();
        });

        afterEach(function () {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });
    });

    describe('New Feed Selection', function () {
        /* TEST: Ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        const originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        let initContainer, finalContainer;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 2500000;
        beforeEach(function (done) {
            loadFeed(0, function () {
                initContainer = $('.header .header-title').html();
                loadFeed(1, function () {
                    finalContainer = $('.header .header-title').html();
                    done();
                });
            });
        });

        it('when a new feed is loaded by the loadFeed function that the content actually changes', function (done) {
            expect(initContainer).not.toEqual(finalContainer);
            done();
        });

        afterEach(function () {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });
    });
}());