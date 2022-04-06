import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
      <div class="row">
        <div class="col-11 p-0">
          <div
            class="input-group input-group-sm rounded-pill px-3 m-0 d-flex flex-row align-items-center searchbar"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" class="form-control" placeholder="Search Tuitter"
              aria-label="Search" aria-describedby="basic-addon1" style="border: 0;
            box-shadow: none;">
          </div>
        </div>
        <div class="col-1">
          <i class="fa-solid fa-gear" style="color: #2a9fd6"></i>
        </div>
      </div>
      <ul class="nav my-2 nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            For you
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block">
          <a class="nav-link" href="#">Entertainment</a>
        </li>
      </ul>
      <div class="card mt-2">
        <img src="./../images/spaceX.jpeg" class="card-img-top" alt="...">
        <div class="card-img-overlay d-flex flex-row align-items-end">
          <h3 style="color: white">SpaceX's Starship</h3>
        </div>
      </div>
      ${PostSummaryList()}
    `);
}
export default ExploreComponent;
