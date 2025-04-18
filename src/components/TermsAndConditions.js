import React, { useState } from 'react';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  const sections = [
    {
      id: 'reservation',
      title: 'The Reservation',
      content: (
        <>
          <p className="mb-3">
            A minimum deposit of 25% of the total price is required at the time of booking and the balance no later than 40 days prior to departure of the tour. For overseas booking and non-residence of Tanzania, payments should be in US dollars or UK Sterling Pounds. Payments may be made in the local currency at the rate or exchange applicable at the time of payment. The company reserves the right to withhold all or part of the service (at its sole discretion) if any payment is not received in accordance with the above conditions.
          </p>
        </>
      ),
    },
    {
      id: 'late-bookings',
      title: 'Late Bookings',
      content: (
        <>
          <p className="mb-3">
            Full payment is due at the time of booking for reservations made within 40 days prior to the commencement of tours.
          </p>
        </>
      ),
    },
    {
      id: 'modification',
      title: 'Modification of Tour',
      content: (
        <>
          <p className="mb-3">
            If you choose to modify the arrangements after the commencement of the tour i.e. Change accommodation or duration of tour, this company accepts no liability for any loss or additional expense incurred and no refund will be made for the unutilized services.
          </p>
        </>
      ),
    },
    {
      id: 'cancellation',
      title: 'Cancellation of Tour',
      content: (
        <>
          <p className="mb-3">
            Should you wish to cancel your confirmed booking, you must advise the company in writing.
          </p>
          <p className="mb-3">
            Reservations that are cancelled, reduced in length of stay or reduced in numbers (hereinafter collectively called a CANCELLATION) are subject to Cancellation and No Show fees if cancelled within 36 days of the arrival date:
          </p>
          <ul className="list-disc ml-6 mb-3">
            <li>40 days to 22 days prior to arrival: 25%</li>
            <li>21 days to 15 days prior to arrival: 30%</li>
            <li>14 days to 07 days prior to arrival: 50%</li>
            <li>06 days to 03 days prior to arrival: 65%</li>
          </ul>
          <p className="mb-3">
            02 days to 00 days prior to arrival: 100%
          </p>
          <p className="mb-3">
            Once the holiday has commenced no refund will be made. The figures expressed are percentage of the total tour price.
          </p>
        </>
      ),
    },
    {
      id: 'itineraries',
      title: 'Itineraries',
      content: (
        <>
          <p className="mb-3">
            Demand for safaris can be high and may lead to shortage of lodge/hotel accommodation. All bookings will be confirmed, subject to availability. Hotels/ Lodges/camps, have single/double rooms are given as an indication of the category and rooms may be reserved at similar lodges/hotels/camps. We undertake to advise you of any changes known to us prior to departure, but the possibility of change without notice, must be acceptable when booking. Where possible and we book overflow accommodation, we do so on the basis of two persons sharing a double room. Both single rooms are available at supplementary cost but neither single rooms nor rooms with private bath/shower can be guaranteed.
          </p>
          <p className="mb-3">
            Safari minibuses cars, four wheel drive vehicles or coaches will be provided according to the route and number of participants. The right is reserved to employ the services of subcontractors. English speaking chauffeur/guides are provided. Occasional mechanical problems, changes of lodge or adverse road conditions may in turn lead to a change of routing or game viewing without prior notice being given. We reserve the right to offer substitutes of equal value or to cancel the operation of any tour. Safaris are offered with a little flexibility in your part will ensure the tour is unique and rewarding.
          </p>
        </>
      ),
    },
    {
      id: 'website',
      title: 'Website & Brochure Description',
      content: (
        <>
          <p className="mb-3">
            Descriptions of accommodation facilities and services in this webpage are shown in good faith. It is however possible that certain facilities or services may be unavailable or limited due to maintenance, adverse weather, local conditions, seasonal restrictions etc.
          </p>
          <p className="mb-3">
            Whilst every effort has been made to ensure the accuracy of this website brochure at the time of printing, errors or omissions may occasionally occur. You must therefore check all details of your holiday booking with your travel agent or supplier at the time of presentation.
          </p>
          <p className="mb-3">
            The company cannot therefore accept responsibility for any information not contained in this brochure, being confirmed verbally by its staff or representatives unless subsequently reconfirmed in writing by the company.
          </p>
        </>
      ),
    },
    {
      id: 'liability',
      title: 'Liability',
      content: (
        <>
          <ol className="list-decimal ml-6 mb-3 space-y-3">
            <li>
              The company is insured against legal liabilities arising from injuries which might be received by passengers while inside vehicles. You are however strongly advised to takeout your own insurance against the risk inherent in traveling in an undeveloped country especially as there may be time when your tour visits remote regions without means of rapid evacuation or medical facilities. Please remember that your supplier does not undertake to provide such assistance at its expense, hence our strong recommendation to provide such assistance at its expense, hence our strong recommendation to provide such assistance to cover such eventualities.
            </li>
            <li>
              The company and its agents act only as agents of the passenger in all the matters relating to hotel accommodation, sightseeing, tour and transport whether by aircraft, rail, motor coach, ship, boat or any matter howsoever except when the passenger is being carried in transport owned by the Company.
            </li>
            <li>
              The company's obligations apply to those services, which they agree to provide on your behalf. We cannot be held liable for any third-party arrangements that you arrange in conjunction on your own. For example, we cannot be held liable if you miss your tour departure because you fail to arrive at the departure point at the agreed time.
            </li>
            <li>
              The Company's liability to passengers carried in its own vehicles is governed by the laws of the respective country in which services are provided and no other country, and all claims are subject to the jurisdiction of the courts of the respective country in which the services were provided.
            </li>
            <li>
              The company reserves the right to employ subcontractors to carry out all or part of the services agreed to be supplied and in the event of such right the terms to the clause relating to the company's liability shall apply.
            </li>
            <li>
              Whilst every care is taken, the company cannot be held responsible for the loss or damage of personal items. It is therefore advisable to effect separate baggage insurance.
            </li>
            <li>
              In the event that a claim is made against the travel agent or tour operator in respect of any loss or damage occasioned by the breach of contract, negligence or other fault of the company, the company shall be liable to indemnify the Travel Agent or Tour Operator (as the case may be) in the courts of the country in which services were provided if the Travel Agent or Tour Operator (as the case may be) provided the courts of the country in which services were provided if the Travel Agent or Tour Operator (as the case may be) has jurisdiction in the said courts.
            </li>
            <li>
              In respect of any such claim mentioned in sub clause (a) of this clause, the company shall be under no liability expressly assumed in this clause.
            </li>
            <li>
              For the purpose of this clause, the company shall be deemed to include its servants and agents and shall be deemed to contract on behalf of such servant and agent.
            </li>
          </ol>
        </>
      ),
    },
  ];

  return (
    <div className="py-20 max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-asparagus to-moss-green p-6 text-white">
        <h1 className="text-3xl font-bold">Tours Terms & Conditions</h1>
        <p className="text-sm mt-2 opacity-80">Please review all terms and conditions carefully before booking</p>
      </div>
      
      {/* Introduction */}
      <div className="p-6 bg-cornsilk border-b border-french-gray">
        <p className="text-cafe-noir">
          These terms and conditions govern your booking with our tour company. Please read them carefully as they set out our respective rights and obligations. By confirming your booking with us, you acknowledge that you have read and understood these terms and conditions and agree to be bound by them.
        </p>
      </div>
      
      {/* Accordion Sections */}
      <div className="p-6">
        {sections.map((section) => (
          <div key={section.id} className="mb-4 border-b border-french-gray last:border-b-0">
            <button
              className="w-full flex justify-between items-center p-4 text-left font-medium text-cafe-noir focus:outline-none"
              onClick={() => toggleSection(section.id)}
            >
              <span className="text-lg">{section.title}</span>
              <span className="transform transition-transform duration-200">
                {activeSection === section.id ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
            </button>
            {activeSection === section.id && (
              <div className="p-4 bg-alice-blue rounded mb-4 text-sm">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <div className="bg-french-gray p-6 text-center text-cafe-noir">
        <p className="text-sm mb-2">
          By proceeding with your booking, you confirm that you have read, understood and accept these terms and conditions.
        </p>
        <p className="text-xs">
          Last updated: April 2025
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;