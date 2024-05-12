class DataGrid {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

export class DataGridWithTitleTextImageAltRepositoryLive extends DataGridWithText {
  constructor(title, text, image, alt, repository, live, x, y, w, h) {
    super(text, x, y, w, h);
    this.title = title;
    this.image = image;
    this.alt = alt;
    this.repository = repository;
    this.live = live;
  }
}
