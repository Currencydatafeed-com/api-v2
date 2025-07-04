//
// InlineResponse2009TechnicalData.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation



public struct InlineResponse2009TechnicalData: Codable {

    public var date: Date?
    public var sma10: Decimal?
    public var sma20: Decimal?
    public var sma50: Decimal?
    public var sma100: Decimal?
    public var sma200: Decimal?
    public var ema12: Decimal?
    public var ema26: Decimal?
    public var ema50: Decimal?
    public var stochasticK: Decimal?
    public var stochasticD: Decimal?
    public var adx: Decimal?
    public var cci: Decimal?
    public var williamsR: Decimal?

    public init(date: Date? = nil, sma10: Decimal? = nil, sma20: Decimal? = nil, sma50: Decimal? = nil, sma100: Decimal? = nil, sma200: Decimal? = nil, ema12: Decimal? = nil, ema26: Decimal? = nil, ema50: Decimal? = nil, stochasticK: Decimal? = nil, stochasticD: Decimal? = nil, adx: Decimal? = nil, cci: Decimal? = nil, williamsR: Decimal? = nil) {
        self.date = date
        self.sma10 = sma10
        self.sma20 = sma20
        self.sma50 = sma50
        self.sma100 = sma100
        self.sma200 = sma200
        self.ema12 = ema12
        self.ema26 = ema26
        self.ema50 = ema50
        self.stochasticK = stochasticK
        self.stochasticD = stochasticD
        self.adx = adx
        self.cci = cci
        self.williamsR = williamsR
    }

    public enum CodingKeys: String, CodingKey { 
        case date
        case sma10 = "sma_10"
        case sma20 = "sma_20"
        case sma50 = "sma_50"
        case sma100 = "sma_100"
        case sma200 = "sma_200"
        case ema12 = "ema_12"
        case ema26 = "ema_26"
        case ema50 = "ema_50"
        case stochasticK = "stochastic_k"
        case stochasticD = "stochastic_d"
        case adx
        case cci
        case williamsR = "williams_r"
    }

}
