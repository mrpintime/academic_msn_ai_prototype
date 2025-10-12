// Feature content templates
const featureContent = {
    'article-writer': {
        title: 'Academic Article Writer',
        icon: 'fa-pen-fancy',
        content: `
            <div class="workspace-grid">
                <div class="workspace-sidebar">
                    <div class="workflow-steps">
                        <div class="step active">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h4>Project Setup</h4>
                                <p>Define topic and parameters</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h4>Literature Review</h4>
                                <p>AI searches and analyzes</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h4>Outline Generation</h4>
                                <p>Structure your paper</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <h4>Content Writing</h4>
                                <p>Automated drafting</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">5</div>
                            <div class="step-content">
                                <h4>Citation & Review</h4>
                                <p>Format and finalize</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="workspace-main">
                    <div class="input-section">
                        <h3><i class="fas fa-keyboard"></i> Start Your Article</h3>
                        
                        <div class="form-group">
                            <label>Research Topic / Keywords</label>
                            <input type="text" placeholder="e.g., Machine Learning in Healthcare, Sustainable Architecture Design..." class="form-input">
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label>Academic Field</label>
                                <select class="form-select">
                                    <option>Architecture</option>
                                    <option>Computer Science</option>
                                    <option>Engineering</option>
                                    <option>Psychology</option>
                                    <option>Medicine</option>
                                    <option>Business</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label>Paper Type</label>
                                <select class="form-select">
                                    <option>Research Paper</option>
                                    <option>Review Article</option>
                                    <option>Case Study</option>
                                    <option>Technical Report</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label>Target Length</label>
                                <select class="form-select">
                                    <option>Short (3-5 pages)</option>
                                    <option>Medium (6-10 pages)</option>
                                    <option>Long (10+ pages)</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label>Citation Style</label>
                                <select class="form-select">
                                    <option>APA 7th</option>
                                    <option>Chicago 17th</option>
                                    <option>IEEE</option>
                                    <option>Harvard</option>
                                    <option>MLA 9th</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label>Additional Instructions (Optional)</label>
                            <textarea class="form-textarea" rows="4" placeholder="Specific requirements, focus areas, or constraints..."></textarea>
                        </div>
                        
                        <div class="action-buttons">
                            <button class="btn btn-primary btn-large">
                                <i class="fas fa-magic"></i> Generate Article
                            </button>
                            <button class="btn btn-secondary">
                                <i class="fas fa-save"></i> Save Draft
                            </button>
                        </div>
                    </div>
                    
                    <div class="preview-section">
                        <div class="preview-header">
                            <h4><i class="fas fa-eye"></i> Preview</h4>
                            <div class="preview-actions">
                                <button class="icon-btn"><i class="fas fa-download"></i></button>
                                <button class="icon-btn"><i class="fas fa-share-alt"></i></button>
                            </div>
                        </div>
                        <div class="preview-content">
                            <div class="empty-state">
                                <i class="fas fa-file-alt"></i>
                                <p>Your article will appear here</p>
                                <span>Fill in the details and click Generate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    'architecture-analyzer': {
        title: 'Architecture Analyzer',
        icon: 'fa-sitemap',
        content: `
            <div class="workspace-grid two-column">
                <div class="analyzer-input">
                    <h3><i class="fas fa-code"></i> System Architecture Input</h3>
                    
                    <div class="tabs">
                        <button class="tab-btn active">Text Description</button>
                        <button class="tab-btn">Upload Document</button>
                        <button class="tab-btn">Paste Code</button>
                    </div>
                    
                    <div class="form-group">
                        <label>Describe Your System Architecture</label>
                        <textarea class="form-textarea code-textarea" rows="15" placeholder="Describe your system components, interactions, data flows, technologies used...

Example:
- Frontend: React.js with Redux state management
- Backend: Node.js Express API with JWT authentication
- Database: PostgreSQL with Redis caching
- Deployment: Docker containers on AWS ECS
- Communication: REST APIs and WebSocket for real-time features"></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>Analysis Focus</label>
                        <div class="checkbox-group">
                            <label class="checkbox-label">
                                <input type="checkbox" checked>
                                <span>Performance Bottlenecks</span>
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox" checked>
                                <span>Security Vulnerabilities</span>
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox" checked>
                                <span>Scalability Issues</span>
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox">
                                <span>Cost Optimization</span>
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox">
                                <span>Design Patterns</span>
                            </label>
                        </div>
                    </div>
                    
                    <button class="btn btn-primary btn-large">
                        <i class="fas fa-search"></i> Analyze Architecture
                    </button>
                </div>
                
                <div class="analyzer-results">
                    <h3><i class="fas fa-chart-bar"></i> Analysis Results</h3>
                    
                    <div class="result-card success">
                        <div class="result-header">
                            <i class="fas fa-check-circle"></i>
                            <h4>Strengths Identified</h4>
                        </div>
                        <ul class="result-list">
                            <li>Good separation of concerns between frontend and backend</li>
                            <li>Proper authentication mechanism with JWT</li>
                            <li>Caching layer implemented for performance</li>
                        </ul>
                    </div>
                    
                    <div class="result-card warning">
                        <div class="result-header">
                            <i class="fas fa-exclamation-triangle"></i>
                            <h4>Potential Issues</h4>
                        </div>
                        <ul class="result-list">
                            <li>Single point of failure in database layer</li>
                            <li>WebSocket scaling might be challenging</li>
                            <li>Missing rate limiting on API endpoints</li>
                        </ul>
                    </div>
                    
                    <div class="result-card info">
                        <div class="result-header">
                            <i class="fas fa-lightbulb"></i>
                            <h4>Recommendations</h4>
                        </div>
                        <ul class="result-list">
                            <li>Implement database replication for high availability</li>
                            <li>Consider using a message queue for async operations</li>
                            <li>Add API gateway with rate limiting and monitoring</li>
                            <li>Implement circuit breaker pattern for external services</li>
                        </ul>
                    </div>
                    
                    <div class="metrics-grid">
                        <div class="metric-card">
                            <i class="fas fa-tachometer-alt"></i>
                            <span>Performance</span>
                            <div class="metric-bar">
                                <div class="metric-fill" style="width: 75%"></div>
                            </div>
                            <strong>75%</strong>
                        </div>
                        <div class="metric-card">
                            <i class="fas fa-shield-alt"></i>
                            <span>Security</span>
                            <div class="metric-bar">
                                <div class="metric-fill" style="width: 60%"></div>
                            </div>
                            <strong>60%</strong>
                        </div>
                        <div class="metric-card">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <span>Scalability</span>
                            <div class="metric-bar">
                                <div class="metric-fill" style="width: 50%"></div>
                            </div>
                            <strong>50%</strong>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    'research-assistant': {
        title: 'Research Assistant',
        icon: 'fa-microscope',
        content: `
            <div class="workspace-grid">
                <div class="upload-zone">
                    <div class="upload-area">
                        <i class="fas fa-cloud-upload-alt"></i>
                        <h3>Upload Research Papers</h3>
                        <p>Drag & drop multiple PDFs, or click to browse</p>
                        <button class="btn btn-secondary">
                            <i class="fas fa-folder-open"></i> Browse Files
                        </button>
                        <span class="upload-note">Supports: PDF, DOCX, TXT up to 50MB each</span>
                    </div>
                    
                    <div class="uploaded-files">
                        <h4>Uploaded Documents (3)</h4>
                        <div class="file-item">
                            <i class="fas fa-file-pdf"></i>
                            <div class="file-info">
                                <span class="file-name">Machine_Learning_Survey_2023.pdf</span>
                                <span class="file-size">2.4 MB</span>
                            </div>
                            <button class="icon-btn danger"><i class="fas fa-times"></i></button>
                        </div>
                        <div class="file-item">
                            <i class="fas fa-file-pdf"></i>
                            <div class="file-info">
                                <span class="file-name">Deep_Learning_Applications.pdf</span>
                                <span class="file-size">3.1 MB</span>
                            </div>
                            <button class="icon-btn danger"><i class="fas fa-times"></i></button>
                        </div>
                        <div class="file-item">
                            <i class="fas fa-file-pdf"></i>
                            <div class="file-info">
                                <span class="file-name">AI_Healthcare_Review.pdf</span>
                                <span class="file-size">1.8 MB</span>
                            </div>
                            <button class="icon-btn danger"><i class="fas fa-times"></i></button>
                        </div>
                    </div>
                    
                    <div class="analysis-options">
                        <h4>Analysis Type</h4>
                        <label class="radio-label">
                            <input type="radio" name="analysis" checked>
                            <span>Key Insights & Trends</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="analysis">
                            <span>Comparative Analysis</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="analysis">
                            <span>Research Gap Identification</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="analysis">
                            <span>Methodology Extraction</span>
                        </label>
                    </div>
                    
                    <button class="btn btn-primary btn-large">
                        <i class="fas fa-brain"></i> Analyze Documents
                    </button>
                </div>
                
                <div class="insights-panel">
                    <h3><i class="fas fa-lightbulb"></i> Extracted Insights</h3>
                    
                    <div class="insight-card">
                        <div class="insight-header">
                            <i class="fas fa-chart-line"></i>
                            <h4>Key Trends Identified</h4>
                        </div>
                        <ul>
                            <li><strong>Transfer Learning:</strong> Dominant approach across 80% of papers</li>
                            <li><strong>Transformer Models:</strong> Increasing adoption in medical imaging</li>
                            <li><strong>Federated Learning:</strong> Emerging for privacy-preserving AI</li>
                        </ul>
                    </div>
                    
                    <div class="insight-card">
                        <div class="insight-header">
                            <i class="fas fa-flask"></i>
                            <h4>Common Methodologies</h4>
                        </div>
                        <ul>
                            <li>Convolutional Neural Networks (CNNs) for image analysis</li>
                            <li>Cross-validation with 80/20 train-test split</li>
                            <li>Adam optimizer with learning rate scheduling</li>
                        </ul>
                    </div>
                    
                    <div class="insight-card">
                        <div class="insight-header">
                            <i class="fas fa-exclamation-circle"></i>
                            <h4>Research Gaps</h4>
                        </div>
                        <ul>
                            <li>Limited studies on model interpretability in clinical settings</li>
                            <li>Lack of standardized datasets for validation</li>
                            <li>Insufficient focus on real-world deployment challenges</li>
                        </ul>
                    </div>
                    
                    <div class="citation-network">
                        <h4><i class="fas fa-project-diagram"></i> Citation Network</h4>
                        <div class="network-visual">
                            <div class="network-node">Paper 1</div>
                            <div class="network-node">Paper 2</div>
                            <div class="network-node">Paper 3</div>
                            <div class="network-connections"></div>
                        </div>
                    </div>
                    
                    <button class="btn btn-secondary">
                        <i class="fas fa-download"></i> Export Insights Report
                    </button>
                </div>
            </div>
        `
    },
    
    'report-summarizer': {
        title: 'Technical Report Summarizer',
        icon: 'fa-compress-alt',
        content: `
            <div class="workspace-grid two-column">
                <div class="input-column">
                    <h3><i class="fas fa-file-alt"></i> Input Report</h3>
                    
                    <div class="tabs">
                        <button class="tab-btn active">Paste Text</button>
                        <button class="tab-btn">Upload File</button>
                        <button class="tab-btn">URL</button>
                    </div>
                    
                    <div class="form-group">
                        <textarea class="form-textarea large-textarea" rows="20" placeholder="Paste your technical report, documentation, or long-form content here...

The AI will extract:
• Executive summary
• Key findings and statistics
• Critical action items
• Main conclusions
• Recommendations"></textarea>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Summary Length</label>
                            <select class="form-select">
                                <option>Very Brief (1-2 paragraphs)</option>
                                <option selected>Executive Summary (3-5 paragraphs)</option>
                                <option>Detailed (6-10 paragraphs)</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label>Focus Area</label>
                            <select class="form-select">
                                <option selected>All Aspects</option>
                                <option>Key Findings Only</option>
                                <option>Action Items Only</option>
                                <option>Statistical Data</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label class="checkbox-label">
                            <input type="checkbox" checked>
                            <span>Include bullet points</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" checked>
                            <span>Highlight statistics</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox">
                            <span>Generate presentation slides</span>
                        </label>
                    </div>
                    
                    <button class="btn btn-primary btn-large">
                        <i class="fas fa-magic"></i> Generate Summary
                    </button>
                </div>
                
                <div class="output-column">
                    <div class="summary-header">
                        <h3><i class="fas fa-file-invoice"></i> Generated Summary</h3>
                        <div class="summary-actions">
                            <button class="icon-btn"><i class="fas fa-copy"></i></button>
                            <button class="icon-btn"><i class="fas fa-download"></i></button>
                            <button class="icon-btn"><i class="fas fa-share-alt"></i></button>
                        </div>
                    </div>
                    
                    <div class="summary-content">
                        <div class="summary-section">
                            <h4><i class="fas fa-star"></i> Executive Summary</h4>
                            <p>This technical report evaluates the implementation of cloud-based infrastructure for enterprise applications. The study covers performance metrics, cost analysis, and security considerations across AWS, Azure, and Google Cloud platforms.</p>
                        </div>
                        
                        <div class="summary-section">
                            <h4><i class="fas fa-chart-bar"></i> Key Findings</h4>
                            <ul>
                                <li><strong>Performance:</strong> AWS showed 15% better latency in 80% of test scenarios</li>
                                <li><strong>Cost:</strong> Azure provides 20% cost savings for Windows-based workloads</li>
                                <li><strong>Scaling:</strong> All platforms support auto-scaling with similar response times (30-45 seconds)</li>
                                <li><strong>Security:</strong> GCP offers most comprehensive built-in security tools</li>
                            </ul>
                        </div>
                        
                        <div class="summary-section">
                            <h4><i class="fas fa-tasks"></i> Critical Action Items</h4>
                            <ol class="priority-list">
                                <li class="priority-high">Migrate production database to AWS by Q3 2024</li>
                                <li class="priority-high">Implement multi-region redundancy for critical services</li>
                                <li class="priority-medium">Evaluate cost optimization with Reserved Instances</li>
                                <li class="priority-low">Train team on cloud security best practices</li>
                            </ol>
                        </div>
                        
                        <div class="summary-section">
                            <h4><i class="fas fa-lightbulb"></i> Recommendations</h4>
                            <p>Based on analysis, recommend hybrid approach: AWS for primary infrastructure, Azure for Windows workloads, and GCP for ML/AI projects. Estimated annual savings: $120K.</p>
                        </div>
                        
                        <div class="stats-highlight">
                            <div class="stat-box">
                                <span class="stat-value">15%</span>
                                <span class="stat-label">Performance Gain</span>
                            </div>
                            <div class="stat-box">
                                <span class="stat-value">$120K</span>
                                <span class="stat-label">Annual Savings</span>
                            </div>
                            <div class="stat-box">
                                <span class="stat-value">4</span>
                                <span class="stat-label">Priority Actions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    'decision-support': {
        title: 'Decision Support Agent',
        icon: 'fa-balance-scale',
        content: `
            <div class="decision-workspace">
                <div class="decision-wizard">
                    <div class="wizard-steps">
                        <div class="wizard-step active">
                            <div class="step-circle">1</div>
                            <span>Define Problem</span>
                        </div>
                        <div class="wizard-step">
                            <div class="step-circle">2</div>
                            <span>Set Criteria</span>
                        </div>
                        <div class="wizard-step">
                            <div class="step-circle">3</div>
                            <span>Input Options</span>
                        </div>
                        <div class="wizard-step">
                            <div class="step-circle">4</div>
                            <span>Analysis</span>
                        </div>
                        <div class="wizard-step">
                            <div class="step-circle">5</div>
                            <span>Recommendation</span>
                        </div>
                    </div>
                </div>
                
                <div class="decision-content">
                    <div class="decision-form">
                        <h3><i class="fas fa-question-circle"></i> What decision do you need help with?</h3>
                        
                        <div class="form-group">
                            <label>Decision Category</label>
                            <select class="form-select">
                                <option>Technology Stack Selection</option>
                                <option>Project Planning</option>
                                <option>Tool/Software Selection</option>
                                <option>System Architecture Design</option>
                                <option>Resource Allocation</option>
                                <option>Other</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label>Describe Your Decision Problem</label>
                            <textarea class="form-textarea" rows="4" placeholder="e.g., Choosing between React, Vue, and Angular for new web application..."></textarea>
                        </div>
                        
                        <h4><i class="fas fa-sliders-h"></i> Decision Criteria (Weight: 0-10)</h4>
                        
                        <div class="criteria-list">
                            <div class="criteria-item">
                                <span>Cost</span>
                                <input type="range" min="0" max="10" value="8" class="criteria-slider">
                                <strong>8</strong>
                            </div>
                            <div class="criteria-item">
                                <span>Performance</span>
                                <input type="range" min="0" max="10" value="9" class="criteria-slider">
                                <strong>9</strong>
                            </div>
                            <div class="criteria-item">
                                <span>Scalability</span>
                                <input type="range" min="0" max="10" value="7" class="criteria-slider">
                                <strong>7</strong>
                            </div>
                            <div class="criteria-item">
                                <span>Ease of Use</span>
                                <input type="range" min="0" max="10" value="6" class="criteria-slider">
                                <strong>6</strong>
                            </div>
                            <div class="criteria-item">
                                <span>Community Support</span>
                                <input type="range" min="0" max="10" value="5" class="criteria-slider">
                                <strong>5</strong>
                            </div>
                        </div>
                        
                        <button class="btn btn-secondary">
                            <i class="fas fa-plus"></i> Add Custom Criterion
                        </button>
                        
                        <h4><i class="fas fa-list"></i> Options to Evaluate</h4>
                        
                        <div class="options-list">
                            <div class="option-item">
                                <input type="text" placeholder="Option 1" value="React" class="form-input">
                                <button class="icon-btn"><i class="fas fa-times"></i></button>
                            </div>
                            <div class="option-item">
                                <input type="text" placeholder="Option 2" value="Vue.js" class="form-input">
                                <button class="icon-btn"><i class="fas fa-times"></i></button>
                            </div>
                            <div class="option-item">
                                <input type="text" placeholder="Option 3" value="Angular" class="form-input">
                                <button class="icon-btn"><i class="fas fa-times"></i></button>
                            </div>
                        </div>
                        
                        <button class="btn btn-secondary">
                            <i class="fas fa-plus"></i> Add Option
                        </button>
                        
                        <div class="action-buttons">
                            <button class="btn btn-primary btn-large">
                                <i class="fas fa-calculator"></i> Analyze & Recommend
                            </button>
                        </div>
                    </div>
                    
                    <div class="decision-results">
                        <h3><i class="fas fa-trophy"></i> Recommendation</h3>
                        
                        <div class="winner-card">
                            <div class="winner-badge">
                                <i class="fas fa-crown"></i>
                                <span>Best Choice</span>
                            </div>
                            <h2>React</h2>
                            <div class="winner-score">
                                <div class="score-circle">
                                    <span>8.4</span>
                                    <small>/10</small>
                                </div>
                            </div>
                            <p>Based on your criteria, React scores highest due to excellent performance, strong community support, and cost-effectiveness.</p>
                        </div>
                        
                        <div class="comparison-table">
                            <h4>Detailed Comparison</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Criteria</th>
                                        <th>Weight</th>
                                        <th>React</th>
                                        <th>Vue.js</th>
                                        <th>Angular</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Cost</td>
                                        <td>8</td>
                                        <td class="score-good">9</td>
                                        <td class="score-good">9</td>
                                        <td class="score-medium">7</td>
                                    </tr>
                                    <tr>
                                        <td>Performance</td>
                                        <td>9</td>
                                        <td class="score-good">9</td>
                                        <td class="score-good">8</td>
                                        <td class="score-medium">7</td>
                                    </tr>
                                    <tr>
                                        <td>Scalability</td>
                                        <td>7</td>
                                        <td class="score-good">8</td>
                                        <td class="score-medium">7</td>
                                        <td class="score-good">9</td>
                                    </tr>
                                    <tr>
                                        <td>Ease of Use</td>
                                        <td>6</td>
                                        <td class="score-medium">7</td>
                                        <td class="score-good">9</td>
                                        <td class="score-bad">5</td>
                                    </tr>
                                    <tr>
                                        <td>Community</td>
                                        <td>5</td>
                                        <td class="score-good">10</td>
                                        <td class="score-good">8</td>
                                        <td class="score-medium">7</td>
                                    </tr>
                                    <tr class="total-row">
                                        <td colspan="2"><strong>Weighted Score</strong></td>
                                        <td class="score-good"><strong>8.4</strong></td>
                                        <td class="score-medium"><strong>7.9</strong></td>
                                        <td class="score-medium"><strong>7.2</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="pros-cons">
                            <div class="pros">
                                <h4><i class="fas fa-check-circle"></i> Pros</h4>
                                <ul>
                                    <li>Largest community and ecosystem</li>
                                    <li>Excellent performance characteristics</li>
                                    <li>Corporate backing (Meta)</li>
                                    <li>Rich component libraries</li>
                                </ul>
                            </div>
                            <div class="cons">
                                <h4><i class="fas fa-times-circle"></i> Considerations</h4>
                                <ul>
                                    <li>Steeper learning curve than Vue</li>
                                    <li>Requires additional libraries for full functionality</li>
                                    <li>More boilerplate code</li>
                                </ul>
                            </div>
                        </div>
                        
                        <button class="btn btn-secondary">
                            <i class="fas fa-download"></i> Export Decision Report
                        </button>
                    </div>
                </div>
            </div>
        `
    }
};

// Feature interaction functions
function openFeature(featureId) {
    const modal = document.getElementById('workspace-modal');
    const title = document.getElementById('workspace-title');
    const body = document.getElementById('workspace-body');
    
    const feature = featureContent[featureId];
    if (feature) {
        title.innerHTML = `<i class="fas ${feature.icon}"></i> ${feature.title}`;
        body.innerHTML = feature.content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeWorkspace() {
    const modal = document.getElementById('workspace-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showWorkspace() {
    openFeature('article-writer');
}

function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeWorkspace();
    }
});

// Close modal on background click
document.getElementById('workspace-modal').addEventListener('click', (e) => {
    if (e.target.id === 'workspace-modal') {
        closeWorkspace();
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            
            // Update active link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

