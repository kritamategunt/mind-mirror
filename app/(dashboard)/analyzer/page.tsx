"use client";
import { Input, Button, Card, Typography, Space } from 'antd';
import { useState } from 'react';

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

export default function AIAnalyzer() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!text.trim()) return;

    setLoading(true);
    console.log('Analyzing:', text);

    // simulate API
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-black px-4">
      <Card
        className="w-full max-w-2xl shadow-xl rounded-2xl"
        styles={{ body: { padding: 32 } }}
      >
        <Space orientation="vertical" size="large" className="w-full">
          
          {/* Header */}
          <div className="text-center">
            <Title level={2} className="mb-2!">
              AI Analyzer
            </Title>
            <Paragraph type="secondary">
              Enter your text and get AI-powered insights instantly.
            </Paragraph>
          </div>

          {/* Input */}
          <TextArea
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoSize={{ minRows: 3, maxRows: 8 }}
            placeholder="Paste or type your text here..."
            className="rounded-lg"
            onKeyDown={(e) => {
              if (e.ctrlKey && e.key === 'Enter') {
                handleAnalyze();
              }
            }}
          />

          {/* Actions */}
          <div className="flex justify-end">
            <Button
              type="primary"
              size="large"
              loading={loading}
              disabled={!text.trim()}
              onClick={handleAnalyze}
              className="px-6"
            >
              Analyze
            </Button>
          </div>

        </Space>
      </Card>
    </div>
  );
}