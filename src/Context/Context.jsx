import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const QuickLinksContext = createContext();


const QuickLinksProvider = ({ globalDomain, children }) => {
    const [quicks, setQuicks] = useState([]);

    useEffect(() => {
        const fetchQuicks = async () => {
            try {
                const res = await axios.get(`${globalDomain}quicksLink/quicks?_format=json`, {
                    headers: {
                        "content-type": "application/json",
                    },
                });

                const quicksData = res.data[0];
                const links = quicksData.field_link.split(",").map((link) => link.trim());
                const titles = quicksData.field_link_1.split(",").map((title) => title.trim());

                const formattedQuicksLinks = links.map((link, index) => ({
                    title: titles[index],
                    url: link,
                }));

                setQuicks(formattedQuicksLinks);
            } catch (error) {
                console.error("Error fetching quick links:", error);
            }
        };

        fetchQuicks();
    }, [globalDomain]);

    return (
        <QuickLinksContext.Provider value={quicks}>
            {children}
        </QuickLinksContext.Provider>
    );
};

export default QuickLinksProvider;