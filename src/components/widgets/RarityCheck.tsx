import { component$, useSignal, $, useVisibleTask$ } from '@builder.io/qwik';
import metadata from './metadata.json';


const IPFS_BASE = 'https://gateway.pinata.cloud/ipfs/QmTbwQpoNRXPsMX5PjJknfrHoSfSiiBM8yQSkAVFNRiVdw';
const TOTAL_NFTS = 2000;

// Create a map for quick lookup
const createNFTMap = () => {
  const map: { [key: string]: any } = {};
  metadata.forEach((nft) => {
    map[nft.id.toString()] = nft;
  });
  return map;
};

const nftMap = createNFTMap();

// Get rarity display info
const getRarityInfo = (rarity: string) => {
  if (rarity === "Legendary") {
    return { text: "Legendary", color: "text-orange-400", rank: "Top 34" };
  }
  
  const rankMatch = rarity.match(/Rank: #(\d+)/);
  if (rankMatch) {
    const rank = parseInt(rankMatch[1]);
    let tier = "";
    let color = "";
    
    if (rank <= 34) {
      tier = "Legendary";
      color = "text-orange-400";
    } else if (rank <= 100) {
      tier = "Mythic";
      color = "text-purple-400";
    } else if (rank <= 500) {
      tier = "Epic";
      color = "text-yellow-400";
    } else if (rank <= 1000) {
      tier = "Rare";
      color = "text-blue-400";
    } else {
      tier = "Common";
      color = "text-green-400";
    }
    
    return { text: tier, color, rank: `#${rank}` };
  }
  
  return { text: "Unknown", color: "text-gray-400", rank: "N/A" };
};

export default component$(() => {
  const searchId = useSignal('1500');
  const nftData = useSignal<any>(null);
  const error = useSignal<string | null>(null);

  // Load default NFT on mount
  useVisibleTask$(() => {
    const defaultNft = nftMap['1500'];
    if (defaultNft) {
      const imageFile = defaultNft.image || `${defaultNft.id}.png`;
      const imageUrl = `${IPFS_BASE}/${imageFile}`;
      const rarityInfo = getRarityInfo(defaultNft.rarity);

      nftData.value = {
        id: defaultNft.id,
        rarity: defaultNft.rarity,
        rarityInfo,
        imageUrl,
      };
    } else {
      error.value = 'Default NFT (ID 1500) not found in metadata.';
    }
  });

  const handleSearch = $(() => {
    error.value = null;
    nftData.value = null;

    try {
      const id = searchId.value;
      const numId = parseInt(id);
      
      if (!id || numId < 1 || numId > TOTAL_NFTS) {
        throw new Error(`Please enter a valid ID between 1 and ${TOTAL_NFTS}`);
      }

      const nft = nftMap[id];
      if (!nft) {
        throw new Error(`KasLord ID ${id} not found`);
      }

      const imageFile = nft.image || `${nft.id}.png`;
      const imageUrl = `${IPFS_BASE}/${imageFile}`;
      const rarityInfo = getRarityInfo(nft.rarity);

      nftData.value = {
        id: nft.id,
        rarity: nft.rarity,
        rarityInfo,
        imageUrl,
      };
    } catch (err: any) {
      error.value = err.message || 'Failed to load NFT data. Check the ID and try again.';
    }
  });

  return (
    <div class="min-h-screen bg-gradient-to-br from-[#70C7BA] via-[#70C7BA] to-[#70C7BA] p-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-8 pt-8">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">
            Rarity Guide
          </h1>
          {/* <p class="text-gray-400">Discover the rarity of your KasLord NFT</p> */}
        </div>

        {/* Search Section */}
        <div class="bg-white/30 rounded-xl shadow-md p-6 mb-6">
          <div class="flex flex-cols-2 sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="number"
              value={searchId.value}
              onInput$={(e) => (searchId.value = (e.target as HTMLInputElement).value)}
              onKeyDown$={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
              onWheel$={(e) => e.preventDefault()}
              placeholder={`Enter ID (1-${TOTAL_NFTS})`}
              min="1"
              max={TOTAL_NFTS}
              class="flex-1 px-4 py-3 bg-white/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button
              onClick$={handleSearch}
              class="px-6 py-3 bg-[#f4b31d] hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg"
            >
              Search
            </button>
          </div>
          
          {error.value && (
            <div class="mt-4 p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-200 text-center">
              {error.value}
            </div>
          )}
        </div>

        {/* NFT Display */}
        {nftData.value && (
          <div class="bg-white/30 rounded-xl shadow-md overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              {/* Image Section */}
              <div class="flex justify-center items-center bg-gray-900 rounded-lg p-4">
                <img
                  src={nftData.value.imageUrl}
                  alt={`KasLord #${nftData.value.id}`}
                  class="w-full max-w-md rounded-lg shadow-md"
                  onError$={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23374151"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239CA3AF"%3EImage Not Found%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>

              {/* Info Section */}
              <div class="flex flex-col justify-center space-y-6">
                <div>
                  <h2 class="text-3xl font-bold text-white mb-2">
                    KasLord #{nftData.value.id}
                  </h2>
                  <div class="h-1 w-20 bg-purple-500 rounded"></div>
                </div>

                <div class="space-y-4">
                  <div class="bg-white/20 rounded-lg p-4">
                    <p class="text-gray-400 text-sm mb-1">Rarity Tier</p>
                    <p class={`text-3xl font-bold ${nftData.value.rarityInfo.color}`}>
                      {nftData.value.rarityInfo.text}
                    </p>
                  </div>

                  <div class="bg-white/20 rounded-lg p-4">
                    <p class="text-gray-400 text-sm mb-1">Rarity Rank</p>
                    <p class="text-2xl font-bold text-white">
                      {nftData.value.rarityInfo.rank}
                      <span class="text-gray-500 text-lg"> / {TOTAL_NFTS}</span>
                    </p>
                  </div>

                  <div class="bg-white/30 rounded-lg p-0">
                    <p class="text-gray-400 text-sm mb-1">IPFS Image</p>
                    <a
                      href={nftData.value.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-purple-400 hover:text-purple-300 text-sm break-all underline"
                    >
                      View on IPFS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rarity Legend */}
        <div class="mt-8 bg-white/30 rounded-xl shadow-md p-6">
          <h3 class="text-xl font-bold text-white mb-4 text-center">Rarity Tiers</h3>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div>
              <p class="text-orange-400 font-bold text-lg">Legendary</p>
              <p class="text-gray-400 text-sm">Rank 1-34</p>
            </div>
            <div>
              <p class="text-purple-400 font-bold text-lg">Mythic</p>
              <p class="text-gray-400 text-sm">Rank 35-100</p>
            </div>
            <div>
              <p class="text-yellow-400 font-bold text-lg">Epic</p>
              <p class="text-gray-400 text-sm">Rank 101-500</p>
            </div>
            <div>
              <p class="text-blue-400 font-bold text-lg">Rare</p>
              <p class="text-gray-400 text-sm">Rank 501-1000</p>
            </div>
            <div>
              <p class="text-green-400 font-bold text-lg">Common</p>
              <p class="text-gray-400 text-sm">Rank 1001+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});