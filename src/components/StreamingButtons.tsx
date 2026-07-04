// Remplacez ces URL par vos vraies playlists.
const SPOTIFY_URL = 'https://open.spotify.com/playlist/5MFFHOJXP6RWGZPyuH8nss?si=wxJGHURmToq7oQZLOZRZtg&pi=u1BEFmuTRHm-N'
const APPLE_MUSIC_URL = 'https://music.apple.com/fr/playlist/le-jardin-detty-escape/pl.u-leylMdltPNDoJ5'

function SpotifyLogo() {
  // Logo officiel Spotify (vert de marque #1ED760).
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path
        fill="#1ED760"
        d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0m5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02m1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.481.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2m.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3"
      />
    </svg>
  )
}

function AppleMusicLogo() {
  // Logo officiel Apple Music : carré arrondi en dégradé rose→rouge + note blanche.
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
      <defs>
        <linearGradient id="apple-music-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FB5C74" />
          <stop offset="1" stopColor="#FA233B" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="5.4" fill="url(#apple-music-grad)" />
      <path
        fill="#fff"
        d="M16.25 6.05c0-.53-.46-.92-.98-.81l-5.9 1.28c-.42.09-.72.46-.72.89v7.05a2.06 2.06 0 1 0 1.32 1.92V9.42l5.06-1.1v4.29a2.06 2.06 0 1 0 1.32 1.92z"
      />
    </svg>
  )
}

export default function StreamingButtons() {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <a
        href={SPOTIFY_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Écouter sur Spotify"
        className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/30 ring-1 ring-white/10 transition-transform hover:scale-105"
      >
        <SpotifyLogo />
        Spotify
      </a>
      <a
        href={APPLE_MUSIC_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Écouter sur Apple Music"
        className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/30 ring-1 ring-white/10 transition-transform hover:scale-105"
      >
        <AppleMusicLogo />
        Apple Music
      </a>
    </div>
  )
}
