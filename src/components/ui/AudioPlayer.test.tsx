import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import AudioPlayer from "./AudioPlayer";

describe("AudioPlayer Component", () => {
  beforeEach(() => {
    // Mock HTMLMediaElement methods on prototype
    vi.spyOn(window.HTMLMediaElement.prototype, "play").mockImplementation(() =>
      Promise.resolve()
    );
    vi.spyOn(window.HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
  });

  it("renders the audio player with play/pause button and track title", () => {
    render(<AudioPlayer />);

    const playButton = screen.getByRole("button", {
      name: /reproducir música de fondo|pausar música de fondo/i,
    });
    expect(playButton).toBeInTheDocument();

    expect(screen.getByText(/Agua Viva/i)).toBeInTheDocument();
  });

  it("allows toggling play and pause", () => {
    render(<AudioPlayer />);

    const playButton = screen.getByRole("button", {
      name: /reproducir música de fondo/i,
    });

    fireEvent.click(playButton);
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });

  it("renders mute and volume toggle button", () => {
    render(<AudioPlayer />);

    const muteButton = screen.getByRole("button", {
      name: /silenciar música|activar sonido/i,
    });
    expect(muteButton).toBeInTheDocument();
  });
});
