var assert = require("assert");
var Author = require("../assets/scripts/main.js").Author;

describe("Author", function(){
  describe("constructor", function(){
    it("should have a default name", function(){
      var author = new Author();
      assert.equal("Anonymous", author.name);
    });
  });

  describe("#writeArticle", function(){
    it("should store articles", function(){
      var author = new Author();
      assert.equal(0, author.articles.length);
      author.writeArticle("test article");
      assert.equal(1, author.articles.length);
    });
  });

  describe("#listArticles", function(){
    it("should list articles", function(){
      var author = new Author("Jim");
      author.writeArticle("a great article");
      assert.equal("Jim has written: a great article", author.listArticles());
    });
  });
});
