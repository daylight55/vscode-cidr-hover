# CIDR Hover Info VSCode Extension

[![CI](https://github.com/daylight55/vscode-cidr-hover/actions/workflows/ci.yml/badge.svg)](https://github.com/daylight55/vscode-cidr-hover/actions/workflows/ci.yml)
[![Coverage Status](https://raw.githubusercontent.com/daylight55/vscode-cidr-hover/main/badge/coverage.svg)](https://github.com/daylight55/vscode-cidr-hover/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![VS Code Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/daylight55.vscode-cidr-hover)](https://marketplace.visualstudio.com/items?itemName=daylight55.vscode-cidr-hover)

A Visual Studio Code extension that provides detailed information about CIDR notation when hovering over IP addresses with subnet masks. It also displays the number of available IP addresses inline.

## Features

- Displays detailed IP range information on hover:
  - Host address
  - Total number of addresses in the network
  - Network range (first to last address)
  - Usable range (excluding network and broadcast addresses)
- Shows the number of available addresses inline after each CIDR notation
- Supports any file types

## Installation

You can install this extension through the Visual Studio Code Marketplace:

1. Open VS Code
2. Press `Ctrl+P` / `Cmd+P`
3. Type `ext install daylight55.vscode-cidr-hover`

Or install it from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=daylight55.vscode-cidr-hover) website.

## Usage

1. Open any supported file type containing CIDR notation
2. Hover over a CIDR notation (e.g., "192.168.0.0/24")
3. View the detailed information in the hover tooltip
4. See the number of available addresses displayed inline after the CIDR notation

## Examples

- Private network ranges:
  - 10.0.0.0/8 (Large network)
  - 172.16.0.0/12 (Medium network)
  - 192.168.0.0/24 (Small network)
- Subnet examples:
  - 192.168.1.0/28 (16 addresses)
  - 10.0.0.0/16 (65,536 addresses)

## Requirements

- Visual Studio Code version 1.86.0 or higher

## Extension Settings

This extension does not add any VS Code settings.

## Known Issues

See the [GitHub issues](https://github.com/daylight55/vscode-cidr-hover/issues) page.

## Contributing

Contributions are welcome! Please check our [Contributing Guidelines](CONTRIBUTING.md).

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Development

### Setup

1. Clone the repository

   ```bash
   git clone https://github.com/daylight55/vscode-cidr-hover.git
   cd vscode-cidr-hover
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Open in VS Code
   ```bash
   code .
   ```

### Development Commands

- `npm run compile` - Compile TypeScript
- `npm run watch` - Watch for changes and compile
- `npm run lint` - Lint the code
- `npm run lint:fix` - Fix linting issues
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

### Debugging

1. Press F5 to start debugging
2. A new VS Code window will open with the extension loaded
3. Make changes and reload the window to test

### Code Coverage

The project maintains a minimum of 80% code coverage. You can view the coverage report after running tests:

1. Run tests with coverage:
   ```bash
   npm run test:coverage
   ```
2. Open `coverage/lcov-report/index.html` in your browser to view the detailed report

### Building VSIX

To create a VSIX package for local installation:

1. Install vsce:

   ```bash
   npm install -g @vscode/vsce
   ```

2. Package the extension:
   ```bash
   vsce package
   ```

The VSIX file will be created in the root directory.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Release Notes

See [CHANGELOG.md](CHANGELOG.md) for detailed release notes.
