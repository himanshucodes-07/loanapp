-- Initial sample data for Loan Hub

-- Insert Loan Types
INSERT INTO loan_types (name, description, min_amount, max_amount, min_duration_months, max_duration_months, required_documents, base_interest_rate, is_active)
VALUES 
('Personal Loan', 'Quick personal loan for all your needs', 50000, 5000000, 12, 60, 'Pan Card, Aadhar, Bank Statement, Salary Slip', 10.5, true),
('Health Loan', 'Special loan for medical and healthcare expenses', 100000, 2000000, 12, 60, 'Pan Card, Aadhar, Medical Reports, Hospital Bills', 11.5, true),
('Zero Balance Account', 'Complete banking with zero minimum balance', 0, 0, 0, 0, 'Pan Card, Aadhar', 0.0, true);

-- Insert Partners (Banks and NBFCs)
INSERT INTO partners (name, email, description, type, rating, website_url, is_active)
VALUES 
('ICIC Bank', 'contact@icicibank.com', 'Leading private sector bank', 'BANK', 4.8, 'https://www.icicibank.com', true),
('HDFC Bank', 'contact@hdfcbank.com', 'Largest private sector bank', 'BANK', 4.9, 'https://www.hdfcbank.com', true),
('Bajaj Finserv', 'contact@bajajfinserv.com', 'Leading NBFC', 'NBFC', 4.6, 'https://www.bajajfinserv.com', true),
('Axis Bank', 'contact@axisbank.com', 'Modern private bank', 'BANK', 4.7, 'https://www.axisbank.com', true),
('Kotak Bank', 'contact@kotakbank.com', 'Premium banking services', 'BANK', 4.8, 'https://www.kotak.com', true);

-- Sample user (optional)
-- Note: Password should be encrypted with BCrypt in production
