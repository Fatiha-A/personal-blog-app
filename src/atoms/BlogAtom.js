import { atom } from "jotai";
import { sampleBlogs } from "../assets/sampleBlogs";

const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || sampleBlogs;
const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

export const blogsAtom = atom(savedBlogs);
export const bookmarksAtom = atom(savedBookmarks);
