import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
          <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
          </div>
          <div class="col-xl-6 col-lg-7 col-md-10">
            ${ExploreComponent()}
          </div>
          <div class="col-xl-4 col-lg-4 d-md-none d-lg-block">
            ${WhoToFollowList()}
          </div>
        </div>
    `);
})($);
