/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Blog from "../components/Blog";

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
});
