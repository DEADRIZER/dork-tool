filters = {
    'allintext':['Searches for occurrences of all the keywords given.', 'allintext:"keyword"'],
    'intext':['Searches for the occurrences of keywords all at once or one at a time.', 'intext:"keyword"'],
    'inurl':['Searches for a URL matching one of the keywords.', 'inurl:"keyword"'],
    'allinurl':['Searches for a URL matching all the keywords in the query.', 'allinurl:"keyword"'],
    'intitle':['Searches for occurrences of keywords in title all or one.', 'intitle:"keyword"'],
    'allintitle':['Searches for occurrences of keywords all at a time.', 'allintitle:"keyword"'],
    'site':['Specifically searches that particular site and lists all the results for that site.', 'site:"www.google.com"'],
    'filetype':['Searches for a particular filetype mentioned in the query.', 'filetype:"pdf"'],
    'link':['Searches for external links to pages.', 'link:"keyword"'],
    'numrange':['Used to locate specific numbers in your searches.', 'numrange:321-325'],
    'before':['Used to search within a particular date range.', '(before:2021-01-01)'],
    'after':['Used to search within a particular date range.', '(after:2021-01-01)'],
    'allinanchor':[ '(and also inanchor)This shows sites which have the keyterms in links pointing to them, in order of the most links.','inanchor:rat' ],
    'allinpostauthor':[ '(and also inpostauthor)Exclusive to blog search, this one picks out blog posts that are written by specific individuals.', 'allinpostauthor:"keyword"'],
    'related':['List web pages that are “similar” to a specified web page.', 'related:www.google.com'],
    'cache':['Shows the version of the web page that Google has in its cache.', 'cache:www.google.com'],
    'keyword':['Searches for the occurrences of keywords.', '"keyword"']
}

request ={
    'allintext':[],
    'intext':[],
    'inurl':[],
    'allinurl':[],
    'intitle':[],
    'allintitle':[],
    'site':[],
    'filetype':[],
    'link':[],
    'numrange':[],
    'before':[],
    'after':[],
    'allinanchor':[],
    'allinpostauthor':[],
    'related':[],
    'cache':[],
}

window.onload = function(){
    var selecto = document.getElementById('filter-selecto');
    Object.entries(filters).forEach(([key, value]) => {
        var newOption = document.createElement("option");
        newOption.innerHTML = key;
        selecto.appendChild(newOption);
    });
};

document.getElementById("research-btn").addEventListener("click", function() {
    // console.log();
    var uri= encodeURIComponent(document.getElementById("request-text").value)
    if (uri){window.open("https://www.google.com/search?q="+uri)}
});

document.getElementById("filter-btn").addEventListener("click", function() {
    var textFilter = document.getElementById("filter-text").value;
    if (textFilter){
        document.getElementById("request-text").value += " "+textFilter;
    }
});

document.getElementById("filter-clear-btn").addEventListener("click", function() {
    document.getElementById("filter-text").value= ""
});

document.getElementById("request-clear-btn").addEventListener("click", function() {
    document.getElementById("request-text").value= ""
});


document.getElementById("filter-selecto").addEventListener("change", function() {
    var chosenFilter = document.getElementById("filter-selecto").value;
    if (chosenFilter != "choose a filter") {
        var dork = filters[chosenFilter][1];
        var filterText = document.getElementById("filter-text")
        if (filterText.value != "") {dork = " "+dork}
        filterText.value += dork;
    }
});