// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "erc721a/contracts/ERC721A.sol";

contract M3LootAvatar is ERC721A, Ownable{

    uint256 public constant tokenPrice = 0.001 ether;
    address private _treasuryAddress;     
    mapping(uint256 => string) private _tokenURIs;

    constructor(address treasuryAddress) ERC721A("M3LootAvatar", "M3LA") {
      _treasuryAddress = treasuryAddress;
    }

    // Withdraw contract balance to creator (mnemonic seed address 0)
    function withdraw() public onlyOwner {
        // This will transfer the remaining contract balance to the owner.
        (bool os, ) = payable(_treasuryAddress).call{value: address(this).balance}('');
        require(os);
    }

    function mintToken(string memory _tokenURI) public payable {
        require(tokenPrice <= msg.value, "Ether value sent is not correct");

        uint256 currentTokenId = totalSupply();
        _tokenURIs[currentTokenId] = _tokenURI;
        _mint(msg.sender, 1);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
        _exists(tokenId),
        "ERC721Metadata: URI query for nonexistent token"
        );

        return bytes(_tokenURIs[tokenId]).length > 0
            ? _tokenURIs[tokenId]
            : "";
    }

    function setTreasuryAddress(address treasuryAddress) external onlyOwner {
        _treasuryAddress = treasuryAddress;
    }
}