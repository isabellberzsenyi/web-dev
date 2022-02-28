const WhoToFollowListItem = (who) => {
  return (`
    <div class="list-group-item">
      <div class="row">
        <div class="col-2 px-0">
          <img src="${who.avatarIcon}" class="rounded-circle m-0 p-0 follow-image" />
        </div>
        <div class="col-6 pe-0 overflow-overlay">
          <p class="fw-bold m-0">
            ${who.userName}&nbsp;
            <i class="fa-solid fa-circle-check"></i>
          </p>
          <p class="fw-normal m-0">
          ${who.handle}
          </p>
        </div>
        <div class="col-4 pe-0">
          <button class="btn btn-primary mt-1 rounded-pill btn-block">
            Follow
          </button>
        </div>
      </div>
    </div>
  `);
}
export default WhoToFollowListItem;