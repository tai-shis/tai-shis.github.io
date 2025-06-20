# Add READme here
---
## dev setup

The project is (trying) to use a [Nix](https://nixos.org) development environment setup

### Prereq to use
- [Install Nix](https://nixos.org/download.html)
- Enable flakes by adding `experiemental-features = nix-command flakes` to `~/.config/nix/nix.conf`

### Using nix dev

```bash
nix develop     # Start the dev shell
yarn install    # Install Dependencies
yarn dev        # Start the dev server
```
