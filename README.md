# Angular-Newspaper

This Project shows the different newspapers of different countries that you are able to select (9 countries actually), the main view (img1) is the top news at the moment in that country, if you click on one of the sources (newspapers) it re-directs you to the second view (img2) which displays the news of that specific newspaper, and finally you are able to search by query param (img3) in the navbar of the main view

<a href="#">Live Preview</a>

<img src="src/assets/preview1.png" height=300 >
<hr>
<img src="src/assets/preview2.png" height=300>
<hr>
<img src="src/assets/preview3.png" height=300>
<hr>

# Architecture

The project has 6 components (1 for header/navbar/display categories, 3 for the views: main view , categories view and search by query view, 1 for footer  and 1 for the error screen view ), and  2 services (one for making the HTTP calls and other for managing user data and connect components).

- ## Component Tree
```
AppComponent
    |
    |___ RouterOutlet
            |
            |___HeaderNavComponent --- MainViewComponent ---FooterComponent
            |
            |___ CategoriesComponent ---FooterComponent
            |
            |___ QueryViewComponent ---FooterComponent
            |
            |___ ErrorComponent
```         

- ## Services

    - ApiService: makes HTTP calls
    - MainService: manages user's data. Uses an external api ("https://newsapi.org/") to fetch the data of the news.

- ## Routes
    - /home  render the HomeComponent
    - /newspaper/:id render the selected newspaper from the source that you select
    - /query/word render the selected news from the query that you search
    - /** render the error screen view

    # Dependencies

- Angular 7
- Bootstrap 4 (uses CDN)

# How to use
- Clone or download the repo
- `cd` into the folder
- `ng serve` to start developing on port 4200
- `npm run build` when ready to deploy

# Improvements
- Add Categories to search from
- Add the login view ( generate the component and the Auth Guard)
- etc...

# License

GNU general license.