/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Blog from "../components/Blog";
import { BlogContainer } from "../components/Blog";

describe("Tests from <Blog /> component", () => {
  test("Blog renders title and author and not renders attrs hidden", async () => {
    const newBlog = {
      id: 1,
      title: "new blog",
      author: "Ruan",
      url: "@newblog",
      likes: 12,
      user: {
        name: "Ruan",
      },
    };

    const { container } = render(<Blog blog={newBlog} />);

    const element = screen.getByText(`${newBlog.title} ${newBlog.author}`);

    expect(element).toBeDefined();

    const hiddenElement = container.querySelector(".blog-desc");

    expect(hiddenElement).not.toBeInTheDocument();
  });

  test("Blog details renders when clicking in the button", async () => {
    const newBlog = {
      id: 1,
      title: "new blog",
      author: "Ruan",
      url: "@newblog",
      likes: 12,
      user: {
        name: "Ruan",
      },
    };
    const user = userEvent.setup();

    const { container } = render(<Blog blog={newBlog} />);

    const button = screen.getByText("view");

    await user.click(button);

    const element = container.querySelector(".blog-desc");

    expect(element).toBeInTheDocument();
  });

  test("When button clicked two times event handle calls two times", async () => {
    const newBlog = {
      id: 1,
      title: "new blog",
      author: "Ruan",
      url: "@newblog",
      likes: 12,
      user: {
        name: "Ruan",
      },
    };

    const mockHandler = jest.fn();
    const mockLikeHandler = jest.fn();
    const mockDeleteHandle = jest.fn();

    render(
      <BlogContainer
        blog={newBlog}
        handleClick={mockHandler}
        likeBlog={mockLikeHandler}
        deleteBlog={mockDeleteHandle}
      />
    );

    const user = userEvent.setup();
    const button = screen.getByText("view");

    await user.click(button);
    await user.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(2);
  });
});
