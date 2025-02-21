import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/DivyaPrasad05",
      "LinkedIn": "https://www.linkedin.com/in/divya-prasad11/",
    },
  }),
}
Component.Explorer({
  title: "Explorer", // title of the explorer component
  folderClickBehavior: "collapse", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
  folderDefaultState: "collapsed", // default state of folders ("collapsed" or "open")
  useSavedState: true, // whether to use local storage to save "state" (which folders are opened) of explorer
  filterFn: (node) => {
    // set containing names of everything you want to filter out
    const omit = new Set(["CNRL", "WISEST", "HIP"])
    return !omit.has(node.name.toLowerCase())
  },
  mapFn: (node) => {
    node.displayName = node.displayName.toUpperCase()
    return node;
  },
  // what order to apply functions in
  order: ["filter", "map"],
});


// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  header: [
    Component.PageTitle(),
    Component.Search(),
    Component.Darkmode(),
  ],
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
  ],
  right: [
    
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
  afterBody: [
    Component.Graph(),
  ],
}

Component.Graph({
  localGraph: {
    drag: true,
    zoom: true,
    depth: 1,
    scale: 1.5,  // Increased zoom level
    repelForce: 0.4,  // Less repulsion
    centerForce: 0.5,  // Stronger pull to center
    linkDistance: 20,  // Nodes closer together
    fontSize: 0.6,
    opacityScale: 1,
    removeTags: [],
    showTags: true,
    enableRadial: false,
  },  
  globalGraph: {
    drag: true,
    zoom: true,
    depth: 1,
    scale: 1.5,
    repelForce: 0.5,
    centerForce: 0.3,
    linkDistance: 30,
    fontSize: 0.6,
    opacityScale: 1,
    removeTags: [], // what tags to remove from the graph
    showTags: true, // whether to show tags in the graph
    enableRadial: true, // whether to constrain the graph, similar to Obsidian
  },
})



// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  header:[ Component.PageTitle(), Component.Search(), Component.Darkmode()],
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [],
  right: [],
  afterBody:[Component.Graph()]
}
