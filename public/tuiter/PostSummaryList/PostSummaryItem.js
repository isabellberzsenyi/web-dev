const PostSummaryItem = (post) => {
  return (`
    <li class="list-group-item">
      <div class="row">
        <div class="col-xl-10 col-md-9 d-flex flex-column">
          <p class="m-0" style="color: gray">${post.topic}</p>
          <div class="d-flex flex-row align-items-center">
            <p class="fw-bold m-0">${post.userName}&nbsp;</p>
            <i class="fa-solid fa-circle-check"></i>
            <p class="m-0 p-0" style="color: gray">&nbsp;- ${post.time}</p>
          </div>
          <p class="fw-bold lh-sm">
            ${post.title}
          </p>
        </div>
        <div class="col-xl-2 col-md-3 m-0 d-flex flex-column align-items-end">
          <img src="${post.image}" width="100px" height="100px" class="rounded" />
        </div>
      </div>
    </li>
  `)
};

export default PostSummaryItem;