import { http } from "@/common/utils/http";
import { act } from "react-dom/test-utils";
import MockAdapter from "axios-mock-adapter";
import { CharacterList } from "./CharacterList";
import { characters } from "@/modules/Character/fixtures";
import { Providers } from "@/containers/Providers/Providers";
import { render, screen, waitFor } from "@testing-library/react";

describe("CharacterList", () => {
  let mock!: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(http);
  });

  beforeEach(() => {
    mock.reset();
  });

  it("Expect CharacterList to render character's names", async () => {
    mock.onGet(`/people`).reply(200, characters);

    act(() => {
      render(
        <Providers>
          <CharacterList />
        </Providers>
      );
    });

    await waitFor(() => {
      characters.results.forEach((character) => {
        screen.getAllByText(character.name);
      });
    });
  });
});
