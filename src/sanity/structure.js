// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('event').title('Events'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['category', 'event'].includes(item.getId()),
      ),
    ])
