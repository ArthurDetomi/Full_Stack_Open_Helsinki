/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import BlogForm from "../components/BlogForm";

describe("Tests from <BlogForm /> component", () => {
  test("when click onSubmit calls createBlog function", async () => {
    const newBlog = {
      title: "new blog",
      author: "Ruan",
      url: "@newblog",
    };

    const createBlog = jest.fn();
    const user = userEvent.setup();

    render(<BlogForm createBlog={createBlog} />);

    const inputTitle = screen.getByPlaceholderText("title");
    const inputUrl = screen.getByPlaceholderText("url");
    const inputAuthor = screen.getByPlaceholderText("author");

    const sendButton = screen.getByText("create");

    await user.type(inputTitle, newBlog.title);
    await user.type(inputUrl, newBlog.url);
    await user.type(inputAuthor, newBlog.author);

    await user.click(sendButton);

    expect(createBlog.mock.calls).toHaveLength(1);
    expect(createBlog.mock.calls[0][0].title).toBe(newBlog.title);
    expect(createBlog.mock.calls[0][0].url).toBe(newBlog.url);
    expect(createBlog.mock.calls[0][0].author).toBe(newBlog.author);
  });
});
