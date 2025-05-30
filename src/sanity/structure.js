// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('event').title('Events'),
      S.divider(),
      S.documentTypeListItem('page').title('Pages'),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && ![
          'event', 
          'page'].includes(item.getId()),
      ),
    ])
