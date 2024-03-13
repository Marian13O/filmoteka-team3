import { sample } from 'lodash';
import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
console.log('sal');
export function initPagination(totalItems, funcOutputData, args) {
  const itemsPerPage = 300;
  if (totalItems <= itemsPerPage) {
    return;
  }

  const options = {
    totalItems,
    itemsPerPage,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination('pagination', options);

  pagination.on('beforeMove', evt => {
    const { page } = evt;
    window.scrollTo(0, 0);

    if (args) {
      funcOutputData(args, page);
    } else {
      funcOutputData(page);
    }
  });
}
