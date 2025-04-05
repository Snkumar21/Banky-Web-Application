// Sample data for banks
const banks = [
    {
        name: 'State Bank of India',
        shortName: 'SBI',
        interestRate: '5.5%',
        mutualFundReturn: '7.2%',
        annualReturn: '6.8%',
        tradingDetails: 'Offers competitive trading accounts with low fees.'
    },
    {
        name: 'ICICI Lombard',
        shortName: 'ICICI',
        interestRate: '6.0%',
        mutualFundReturn: '8.0%',
        annualReturn: '7.5%',
        tradingDetails: 'Provides advanced trading platforms and tools.'
    },
    {
        name: 'Punjab National Bank',
        shortName: 'PNB',
        interestRate: '5.8%',
        mutualFundReturn: '7.5%',
        annualReturn: '7.0%',
        tradingDetails: 'Specializes in international trading services.'
    },
    {
        name: 'HDFC Bank',
        shortName: 'HDFC',
        interestRate: '7.40%',
        mutualFundReturn: '26.34%-27.25%',
        annualReturn: '2.59%',
        tradingDetails: 'Specializes in international trading services.'
    },
    {
        name: 'Axis Bank',
        shortName: 'Axis',
        interestRate: '7.40%',
        mutualFundReturn: '26.34%-27.25%',
        annualReturn: '2.59%',
        tradingDetails: 'Specializes in international trading services.'
    },
    {
        name: 'Allahabad Bank',
        shortName: 'Allahabad',
        interestRate: '6.50%',
        mutualFundReturn: '7.0%-9.5%',
        annualReturn: '6.8%',
        tradingDetails: 'Now merged with Indian Bank, focuses on banking services and deposits.'
    },
    {
        name: 'American Express',
        shortName: 'Amex',
        interestRate: 'N/A (Credit Card Provider)',
        mutualFundReturn: 'N/A',
        annualReturn: 'N/A',
        tradingDetails: 'Known for credit card services with premium benefits.'
    },
    {
        name: 'Andhra Bank',
        shortName: 'Andhra',
        interestRate: '6.90%',
        mutualFundReturn: '5.8%-7.0%',
        annualReturn: '5.5%',
        tradingDetails: 'Merged with Union Bank of India; offers personal and business loans.'
    },
    {
        name: 'Bandhan Bank',
        shortName: 'Bandhan',
        interestRate: '7.15%',
        mutualFundReturn: '20%-23%',
        annualReturn: '6.2%',
        tradingDetails: 'Microfinance and small enterprise lending services.'
    },
    {
        name: 'Bank of Baroda',
        shortName: 'BoB',
        interestRate: '7.10%',
        mutualFundReturn: '8.5%-11.0%',
        annualReturn: '7.2%',
        tradingDetails: 'Offers corporate and retail banking with global presence.'
    },
    {
        name: 'Bank of India',
        shortName: 'BoI',
        interestRate: '7.0%',
        mutualFundReturn: '6.5%-8.0%',
        annualReturn: '6.9%',
        tradingDetails: 'Provides a wide range of financial services for corporate and retail.'
    },
    {
        name: 'Bank of Maharashtra',
        shortName: 'BoM',
        interestRate: '7.15%',
        mutualFundReturn: '7.5%-9.0%',
        annualReturn: '7.0%',
        tradingDetails: 'Focuses on small enterprises and retail banking.'
    },
    {
        name: 'Canara Bank',
        shortName: 'Canara',
        interestRate: '7.20%',
        mutualFundReturn: '7.8%-10.0%',
        annualReturn: '6.5%',
        tradingDetails: 'Strong focus on retail banking and digital services.'
    },
    {
        name: 'Catholic Syrian Bank Ltd.',
        shortName: 'CSB',
        interestRate: '6.75%',
        mutualFundReturn: '6.5%-8.5%',
        annualReturn: '5.9%',
        tradingDetails: 'Primarily focuses on personal banking services.'
    },
    {
        name: 'Central Bank of India',
        shortName: 'CBI',
        interestRate: '6.85%',
        mutualFundReturn: '7.5%-8.0%',
        annualReturn: '6.2%',
        tradingDetails: 'Government-owned bank focusing on lending and saving services.'
    },
    {
        name: 'Citibank',
        shortName: 'Citi',
        interestRate: '6.90%',
        mutualFundReturn: '7.0%-10.0%',
        annualReturn: '7.1%',
        tradingDetails: 'Known for credit card and wealth management services.'
    },
    {
        name: 'City Union Bank',
        shortName: 'CUB',
        interestRate: '7.10%',
        mutualFundReturn: '6.0%-7.5%',
        annualReturn: '6.3%',
        tradingDetails: 'Focuses on SME and retail banking services.'
    },
    {
        name: 'Corporation Bank',
        shortName: 'Corp',
        interestRate: '7.25%',
        mutualFundReturn: '8.0%-9.0%',
        annualReturn: '7.0%',
        tradingDetails: 'Merged with Union Bank of India, offers personal loans and savings.'
    },
    {
        name: 'DCB Bank',
        shortName: 'DCB',
        interestRate: '7.45%',
        mutualFundReturn: '7.5%-9.0%',
        annualReturn: '7.1%',
        tradingDetails: 'Specializes in home loans, business loans, and SME services.'
    },
    {
        name: 'Dena Bank',
        shortName: 'Dena',
        interestRate: '6.85%',
        mutualFundReturn: '7.0%-8.5%',
        annualReturn: '6.2%',
        tradingDetails: 'Merged with Bank of Baroda, provides retail and MSME banking.'
    },
    {
        name: 'Deutsche Bank',
        shortName: 'Deutsche',
        interestRate: 'N/A (Investment Bank)',
        mutualFundReturn: '10%-15%',
        annualReturn: '8.2%',
        tradingDetails: 'Known for global investment banking and wealth management services.'
    },
    {
        name: 'Dhanlaxmi Bank',
        shortName: 'Dhanlaxmi',
        interestRate: '7.30%',
        mutualFundReturn: '8.0%-9.5%',
        annualReturn: '7.2%',
        tradingDetails: 'Retail banking services with a focus on personal loans and deposits.'
    },
    {
        name: 'DBS Bank',
        shortName: 'DBS',
        interestRate: '7.50%',
        mutualFundReturn: '9.0%-12.0%',
        annualReturn: '8.5%',
        tradingDetails: 'Singapore-based bank with strong digital banking services in India.'
    },
    {
        name: 'Federal Bank',
        shortName: 'Federal',
        interestRate: '7.35%',
        mutualFundReturn: '8.5%-10.5%',
        annualReturn: '7.0%',
        tradingDetails: 'Offers a wide range of financial products and services.'
    }   
    // Add more bank objects as needed
];

// Function to search and display bank details
function searchBankDetails() {
    let input = document.getElementById('bankSearch').value.toUpperCase();
    let bankDetailsDiv = document.getElementById('bankDetails');

    // Clear previous results
    bankDetailsDiv.innerHTML = '';

    // Search for the bank in the data by full name or short name
    let foundBanks = banks.filter(bank => 
        bank.name.toUpperCase().includes(input) || 
        bank.shortName.toUpperCase().includes(input)
    );

    if (input === '') {
        bankDetailsDiv.innerHTML = '<p>Please enter a bank name to search.</p>';
        return;
    }

    if (foundBanks.length > 0) {
        foundBanks.forEach(bank => {
            // Create a container for bank details
            let bankInfo = document.createElement('div');
            bankInfo.className = 'bank-info';

            bankInfo.innerHTML = `
                <h3>${bank.name}</h3>
                <p><strong>Interest Rate:</strong> ${bank.interestRate}</p>
                <p><strong>Mutual Fund Return:</strong> ${bank.mutualFundReturn}</p>
                <p><strong>Annual Return:</strong> ${bank.annualReturn}</p>
                <p><strong>Trading Details:</strong> ${bank.tradingDetails}</p>
            `;

            bankDetailsDiv.appendChild(bankInfo);
        });
    } else {
        bankDetailsDiv.innerHTML = '<p>No bank found with that name.</p>';
    }
}
