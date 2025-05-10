import React from "react";


export const ContractRates = ({ rates }) => {
    if (!rates) return null;
  
    const seasons = {
      peak: "Peak (1st July-31st August)",
      shoulder: "Shoulder (03 Jan-31 Mar, 1st Sept-31st Oct)",
      low: "Low (01 Apr-30 Jun, 01 Nov-22nd Dec)",
      christmas: "Christmas (23rd Dec-02 Jan)"
    };
  
    return (
      <div className="mt-6 border-t border-french-gray pt-4">
        <h3 className="text-lg font-semibold text-cafe-noir mb-4">Contract Rates (2025)</h3>
        
        {rates.masaiMara && (
          <div className="mb-6">
            <h4 className="font-medium text-brown-sugar mb-2">Maasai Mara</h4>
            
            <div className="mb-4">
              <h5 className="text-sm font-medium text-cafe-noir mb-1">Non-Resident Rates (USD)</h5>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-french-gray">
                  <thead className="bg-cornsilk">
                    <tr>
                      <th className="p-2 border border-french-gray">Room Type</th>
                      <th className="p-2 border border-french-gray">Season</th>
                      <th className="p-2 border border-french-gray">Single</th>
                      <th className="p-2 border border-french-gray">Twin/Double</th>
                      <th className="p-2 border border-french-gray">Triple</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(rates.masaiMara.nonResident.classicChalets).map(([season, prices]) => (
                      <tr key={`mara-classic-${season}`}>
                        <td className="p-2 border border-french-gray">Classic Chalets</td>
                        <td className="p-2 border border-french-gray">{seasons[season]}</td>
                        <td className="p-2 border border-french-gray">${prices.single}</td>
                        <td className="p-2 border border-french-gray">${prices.twin}</td>
                        <td className="p-2 border border-french-gray">${prices.triple}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mb-4">
              <h5 className="text-sm font-medium text-cafe-noir mb-1">Resident Rates (KES, 20% Commissionable)</h5>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-french-gray">
                  <thead className="bg-cornsilk">
                    <tr>
                      <th className="p-2 border border-french-gray">Room Type</th>
                      <th className="p-2 border border-french-gray">Season</th>
                      <th className="p-2 border border-french-gray">Single</th>
                      <th className="p-2 border border-french-gray">Twin/Double</th>
                      <th className="p-2 border border-french-gray">Triple</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(rates.masaiMara.resident.classicChalets).map(([season, prices]) => (
                      <tr key={`mara-resident-${season}`}>
                        <td className="p-2 border border-french-gray">Classic Chalets</td>
                        <td className="p-2 border border-french-gray">{seasons[season]}</td>
                        <td className="p-2 border border-french-gray">KES {prices.single.toLocaleString()}</td>
                        <td className="p-2 border border-french-gray">KES {prices.twin.toLocaleString()}</td>
                        <td className="p-2 border border-french-gray">KES {prices.triple.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {rates.amboseli && (
          <div className="mb-6">
            <h4 className="font-medium text-brown-sugar mb-2">Amboseli</h4>
            
            <div className="mb-4">
              <h5 className="text-sm font-medium text-cafe-noir mb-1">Non-Resident Rates (USD)</h5>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-french-gray">
                  <thead className="bg-cornsilk">
                    <tr>
                      <th className="p-2 border border-french-gray">Room Type</th>
                      <th className="p-2 border border-french-gray">Season</th>
                      <th className="p-2 border border-french-gray">Single</th>
                      <th className="p-2 border border-french-gray">Twin/Double</th>
                      <th className="p-2 border border-french-gray">Triple</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(rates.amboseli.nonResident.lodgeTents).map(([season, prices]) => (
                      <tr key={`amboseli-${season}`}>
                        <td className="p-2 border border-french-gray">Lodge/Tents</td>
                        <td className="p-2 border border-french-gray">{seasons[season]}</td>
                        <td className="p-2 border border-french-gray">${prices.single}</td>
                        <td className="p-2 border border-french-gray">${prices.twin}</td>
                        <td className="p-2 border border-french-gray">${prices.triple}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {rates.extras && (
          <div>
            <h4 className="font-medium text-brown-sugar mb-2">Extras (USD)</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(rates.extras).map(([extra, price]) => (
                <div key={extra} className="bg-cornsilk p-3 rounded-lg">
                  <div className="font-medium text-cafe-noir capitalize">{extra.replace(/([A-Z])/g, ' $1')}</div>
                  <div className="text-brown-sugar">${price} per person</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };